import { AppDataSource } from '../database/datasource';
import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class ProductService {
  private repository: ProductRepository;

  constructor(
    repository: ProductRepository = new ProductRepository(AppDataSource.manager)
  ) {
    this.repository = repository;
  }

  public async getAllProducts(): Promise<Array<Product>> {
    return await this.repository.findAllProducts();
  }

  public async getProductById(id: number): Promise<Product | null> {
    return await this.repository.findProduct(id);
  }

  public async insertProduct(product: Product): Promise<void> {
    await this.repository.create(product);
  }

  public async deleteProduct(id: string): Promise<void> {
    await this.repository.remove(id);
  }

  public async updateProduct(id: string, updateProduct: Product): Promise<void> {
    await this.repository.update(id, updateProduct);
  }
}
