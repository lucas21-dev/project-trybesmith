import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

const Products = new ProductsController();

productsRouter.get('/', Products.getProductsController);

export default productsRouter;