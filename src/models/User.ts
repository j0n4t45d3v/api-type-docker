import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column({ nullable: true, unique: true })
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

  public getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string) {
    this.email = email;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(password: string) {
    this.password = password;
  }
  public getOffice(): string {
    return this.office;
  }
  public setOffice(office: string) {
    this.office = office;
  }
}
