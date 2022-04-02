import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

const products = new ProductsController();

productsRouter.get('/', products.getProductsController);

productsRouter.post('/', products.createProductsController);

export default productsRouter;