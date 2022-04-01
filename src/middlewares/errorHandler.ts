import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (err: unknown, req: Request, res: Response, _next: NextFunction): Response => {
  console.error(err);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Algo deu errado' });
};