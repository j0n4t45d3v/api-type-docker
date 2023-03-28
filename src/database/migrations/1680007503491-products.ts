import { MigrationInterface, QueryRunner } from 'typeorm';

export class products1680007503491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE products (
        barcod CHAR(12) PRIMARY KEY NOT NULL,
        name VARCHAR(225),
        brand VARCHAR(225),
        quantity INTEGER,
        price REAL,
        sector VARCHAR(225)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE products`);
  }
}
