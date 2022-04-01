import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersModel from '../models/OrdersModel';

export default class OrdersController {
  private OrdersModel: OrdersModel;

  constructor() {
    this.OrdersModel = new OrdersModel();
  }

  getOrdersController = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.OrdersModel.getOrders();

    return res.status(StatusCodes.OK).json(orders);
  };
}