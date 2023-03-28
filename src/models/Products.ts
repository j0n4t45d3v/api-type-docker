import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryColumn()
  private barcod: string;

  @Column()
  private name: string;

  @Column()
  private brand: string;

  @Column()
  private quantity: number;

  @Column()
  private price: string;

  @Column()
  private sector: string;

  constructor(
    barcod: string,
    name: string,
    brand: string,
    quantity: number,
    price: string,
    sector: string
  ) {
    this.barcod = barcod;
    this.name = name;
    this.brand = brand;
    this.quantity = quantity;
    this.price = price;
    this.sector = sector;
  }

  public getBarcod(): string {
    return this.barcod;
  }

  public setBarcod(barcod: string) {
    this.barcod = barcod;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getBrand(): string {
    return this.brand;
  }

  public setBrand(brand: string) {
    this.brand = brand;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  public getPrice(): string {
    return this.price;
  }

  public setPrice(price: string) {
    this.price = price;
  }

  public getSector(): string {
    return this.sector;
  }
  public setSector(sector: string) {
    this.sector = sector;
  }
}