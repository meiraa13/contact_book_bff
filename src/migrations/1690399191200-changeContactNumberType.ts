import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeContactNumberType1690399191200 implements MigrationInterface {
    name = 'ChangeContactNumberType1690399191200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phoneNumber" integer NOT NULL`);
    }

}
