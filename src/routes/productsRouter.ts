import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import createProduct from '../joiSchemas/createProduct';
import validateProduct from '../middlewares/validateProduct';

const productsRouter = Router();

const products = new ProductsController();

productsRouter.get('/', products.getProductsController);

productsRouter.post('/', validateProduct(createProduct), products.createProductsController);

export default productsRouter;