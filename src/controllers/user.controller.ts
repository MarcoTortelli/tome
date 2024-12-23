import type { Request, Response } from 'express';

import userService from '../services/user.service';

export const createUser = (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	userService
		.createUser({ name, email, password })
		.then((user) => {
			res.status(201).json(user);
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
};

export const getUsers = (req: Request, res: Response) => {
	userService
		.getUsers()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
};
export const getUserById = (req: Request, res: Response): void => {
	const id = Number(req.params.id);
	userService
		.getUserById(id)
		.then((user) => {
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ message: 'User not found' });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
};

export const updateUser = (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const { name, email, password } = req.body;
	userService
		.updateUser(id, { name, email, password })
		.then((user) => {
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ message: 'User not found' });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
};

export const deleteUser = (req: Request, res: Response) => {
	const id = Number(req.params.id);
	userService
		.deleteUser(id)
		.then((user) => {
			if (user) {
				res.status(200).json(user);
			} else {
				res.status(404).json({ message: 'User not found' });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
};
