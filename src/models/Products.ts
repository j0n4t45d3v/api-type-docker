import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private email: string;

  @Column()
  private password: string;

  @Column()
  private office: string;

  constructor(name: string, email: string, password: string, office: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.office = office;
  }
}