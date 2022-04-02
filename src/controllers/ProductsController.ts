import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsModel from '../models/ProductsModel';

export default class ProductsController {
  private ProductsModel: ProductsModel;

  constructor() {
    this.ProductsModel = new ProductsModel();
  }

  getProductsController = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.ProductsModel.getProducts();

    return res.status(StatusCodes.OK).json(products);
  };

  createProductsController = async (req: Request, res: Response): Promise<Response> => {
    const { name, amount } = req.body;

    const insertData = await this.ProductsModel.createProduct({ name, amount });

    const response = {
      item: {
        ...insertData,
      },
    };

    return res.status(StatusCodes.CREATED).json(response);
  };
}