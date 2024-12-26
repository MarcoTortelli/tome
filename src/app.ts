import express from 'express';
import { errorHandler } from './middlewares/error.handler';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes)
app.use(errorHandler);

export default app;
