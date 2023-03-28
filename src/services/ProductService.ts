import { AppDataSource } from "../database/datasource";
import { Product } from "../models/Products";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  private repository: ProductRepository;

  constructor(
    repository: ProductRepository = new ProductRepository(AppDataSource.manager)
  ) {
    this.repository = repository;
  }

  public async findAllProducts(): Promise<Array<Product>> {
    return await this.repository.getAllProducts();
  } 
  
}
