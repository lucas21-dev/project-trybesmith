import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getProducts = async (): Promise<RowDataPacket[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [result] = await this.connection.execute(query);

    return result as RowDataPacket[];
  };

  createProduct = async ({ name, amount }: IProduct): Promise<IProduct> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';

    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    return {
      id: result.insertId,
      name,
      amount,
    };
  };
}
