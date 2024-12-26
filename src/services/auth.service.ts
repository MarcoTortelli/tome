import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { AppError } from '../errors/app.error';
import prisma from '../prisma/client';
import { getEnv } from '../utils/env';

const AuthSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

const UserSchema = AuthSchema.extend({
	name: z.string(),
});

type Auth = z.infer<typeof AuthSchema>;
type User = z.infer<typeof UserSchema>;

const signUp = async (data: User) => {
	const parsedData = UserSchema.parse(data);
	const user = await prisma.user.create({
		data: parsedData,
	});
	return user;
};

const signIn = async (data: Auth) => {
	const parsedData = AuthSchema.parse(data);
	const user = await prisma.user.findUnique({
		where: { email: parsedData.email },
	});
	if (!user || !(await bcrypt.compare(parsedData.password, user.password))) {
		throw new AppError('Invalid credentials', 401);
	}
	const token = jwt.sign({ userId: user.id }, getEnv('JWT_SECRET'), {
		expiresIn: getEnv('JWT_EXPIRATION_TIME'),
	});
	return token;
};

export default {
	signUp,
	signIn,
};
