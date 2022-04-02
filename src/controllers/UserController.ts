import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwtGenerator from '../helpers/jwtGenerator';
import UserModel from '../models/UserModel';

export default class UserController {
  private UserModel: UserModel;

  constructor() {
    this.UserModel = new UserModel();
  }

  createUserController = async (req: Request, res: Response): Promise<Response> => {
    const { username, classe, level, password } = req.body;

    await this.UserModel.createUser({ username, classe, level, password });

    const token = jwtGenerator({ username, classe, level, password });

    return res.status(StatusCodes.CREATED).json({ token });
  };
}