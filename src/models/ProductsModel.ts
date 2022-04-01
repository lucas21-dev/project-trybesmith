import { Pool, RowDataPacket } from 'mysql2/promise';
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
}
