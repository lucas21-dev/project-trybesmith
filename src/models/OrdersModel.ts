import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export default class OrdersModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getOrders = async (): Promise<RowDataPacket[]> => {
    const query = `SELECT 
        Orders.id,
        Orders.userId,
        JSON_ARRAYAGG(Products.id) AS products
      FROM
        Trybesmith.Orders
      INNER JOIN
        Trybesmith.Products ON Products.orderId = Orders.id
      GROUP BY Orders.id
      ORDER BY Orders.userId;`;

    const [result] = await this.connection.execute(query);
    
    return result as RowDataPacket[];
  };
}