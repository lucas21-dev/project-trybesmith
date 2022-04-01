import { Router } from 'express';
import OrdersController from '../controllers/OrdersControllers';

const ordersRouter = Router();

const orders = new OrdersController();

ordersRouter.get('/', orders.getOrdersController);

export default ordersRouter;