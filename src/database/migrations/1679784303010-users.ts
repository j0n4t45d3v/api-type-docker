import { MigrationInterface, QueryRunner } from "typeorm"

export class users1679784303010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255),
            office VARCHAR(255)
        )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE users');
    }
}
