import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsModel from '../models/ProductsModel';

export default class ProductsController {
  public ProductsModel: ProductsModel;

  constructor() {
    this.ProductsModel = new ProductsModel();
  }

  getProductsController = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.ProductsModel.getProducts();

    return res.status(StatusCodes.OK).json(products);
  };
}