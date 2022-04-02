import { Router } from 'express';
import UserController from '../controllers/UserController';
import createUser from '../joiSchemas/createUser';
import validateUser from '../middlewares/validateUser';

const userRouter = Router();

const user = new UserController();

userRouter.post('/', validateUser(createUser), user.createUserController);

export default userRouter;