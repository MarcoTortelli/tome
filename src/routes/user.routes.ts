import { Router } from 'express';
import {
	createUser,
	deleteUser,
	getUserById,
	getUsers,
	updateUser,
} from '../controllers/user.controller';
import { hashPassword } from '../middlewares/hash.password';

const router = Router();
router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id',hashPassword, updateUser);
router.delete('/users/:id', deleteUser);

export default router;
