import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

const jwtConfig = { expiresIn: '2d' };

const SECRET = 'segredonaoconte';

export default (data: IUser) => jwt.sign({ data }, SECRET, jwtConfig);