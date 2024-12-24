import { AppError } from "../errors/app.error";
import prisma from "../prisma/client";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

type User = z.infer<typeof UserSchema>;

const createUser = async (data: User) => {
  const parsedData = UserSchema.parse(data);
  return prisma.user.create({ data: parsedData });
};

const getUsers = async () => {
  return prisma.user.findMany();
};

const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError("User not found", 404);
  }
  return user;
};

const updateUser = async (id: number, data: User) => {
  await getUserById(id);
  const parsedData = UserSchema.partial().parse(data);
  return prisma.user.update({ where: { id }, data: parsedData });
};

const deleteUser = async (id: number) => {
  await getUserById(id);
  return prisma.user.delete({ where: { id } });
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
