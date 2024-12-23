import { AppError } from "../errors/app.error";
import prisma from "../prisma/client";

interface UserData {
  name: string;
  email: string;
  password: string;
}

const createUser = async (data: UserData) => {
  return prisma.user.create({ data });
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

const updateUser = async (id: number, data: UserData) => {
  await getUserById(id);
  return prisma.user.update({ where: { id }, data });
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
