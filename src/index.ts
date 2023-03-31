import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import swagerUi from "swagger-ui-express";
import { ProductController } from './controllers/ProductController';
import { UserController } from './controllers/UserController';
import { AppDataSource } from './database/datasource';
import swaggerDocs from "./swagger.json";
import cors from "cors";

export class Application extends Server {
  constructor() {
    super();
    
    this.setupMiddleware();
    this.setupController();
    this.setupDatabase();
  }

  private setupController(): void {
    const userController = new UserController();
    const productController = new ProductController();

    super.addControllers([userController, productController]);
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

  private setupMiddleware(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // habilita o cors
    this.app.use(cors())

    this.app.use("/doc", swagerUi.serve, swagerUi.setup(swaggerDocs))
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log('server rodando na porta:', port);
    });
  }
}
