export interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number | null;
}

export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}
