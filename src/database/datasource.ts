import { DataSource } from 'typeorm';
import { Product } from '../models/Products';
import { User } from '../models/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://ockiwslh:NgubKUTfHbHNvjMtBXxQ6lK_C6Q5uzMY@motty.db.elephantsql.com/ockiwslh',
  entities: [User, Product],
  migrations: ['src/database/migrations/*.{ts,js}'],
  synchronize: true
});
