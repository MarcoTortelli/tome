import express from 'express';
import { errorHandler } from './middlewares/error.handler';
import userRouters from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/api', userRouters); 
app.use(errorHandler);

export default app;
