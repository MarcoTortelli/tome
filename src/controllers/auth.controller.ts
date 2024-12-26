import type { NextFunction, Request, Response } from 'express';
import authService from '../services/auth.service';

export const signUp = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { name, email, password } = req.body;
		const user = await authService.signUp({ name, email, password });
		res.status(201).json(user);
		return;
	} catch (error) {
		next(error);
	}
};

export const signIn = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { email, password } = req.body;
		const token = await authService.signIn({ email, password });
		res.status(200).json({ token });
		return;
	} catch (error) {
		next(error);
	}
};
