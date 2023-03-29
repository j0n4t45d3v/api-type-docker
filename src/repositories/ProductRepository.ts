import { EntityManager } from "typeorm";
import { Product } from "../models/Products";

export class ProductRepository {
  private entityManager: EntityManager;

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  public async findAllProducts(): Promise<Array<Product>> {
    return await this.entityManager.find(Product);
  }

  public async findProduct(id: number): Promise<Product | null> {
    return await this.entityManager
      .getRepository(Product)
      .createQueryBuilder("products")
      .where("products.id = :id", { id: id })
      .getOne();
  }

  public async create(product: Product): Promise<void> {
    await this.entityManager.save(product);
  }

  public async remove(id: string): Promise<void> {
    await this.entityManager.delete(Product, id);
  }

  public async update(id: string, product: Product): Promise<void>{
    await this.entityManager.update(Product, product, { getBarcod: id });
  }
}
