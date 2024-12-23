import prisma from '../prisma/client';

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
	return prisma.user.findUnique({ where: { id } });
};

const updateUser = async (id: number, data: UserData) => {
	return prisma.user.update({ where: { id }, data });
};

const deleteUser = async (id: number) => {
	return prisma.user.delete({ where: { id } });
};

export default {
	createUser,
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
};
