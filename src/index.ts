import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { UserController } from './controllers/UserController';
import { AppDataSource } from './database/datasource';

export class ApiLogin extends Server {
  constructor() {
    super();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.setupController();
    this.setupDatabase();
  }

  private setupController(): void {
    const userController = new UserController();

    super.addControllers([userController]);
  }

  private setupDatabase(): void {
    AppDataSource.initialize()
      .then(() => {
        console.log('Data Source inicializado!');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log('server rodando na porta:', port);
    });
  }
}
