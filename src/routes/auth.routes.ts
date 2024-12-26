import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controller';
import { hashPassword } from '../middlewares/hash.password';

const router = Router();

router.post('/sign-up', hashPassword, signUp);
router.post('/sign-in', signIn);

export default router;
