import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import { productsRouter, ordersRouter, userRouter } from './routes';
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/orders', ordersRouter);

app.use('/users', userRouter);

app.use(errorHandler);

export default app;
