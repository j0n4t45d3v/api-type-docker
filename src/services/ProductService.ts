import { AppDataSource } from "../database/datasource";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  private repository: ProductRepository;

  constructor(
    repository: ProductRepository = new ProductRepository(AppDataSource.manager)
  ) {
    this.repository = repository;
  }

  
}
