import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableUsers1664942162335 implements MigrationInterface {
    name = 'createTableUsers1664942162335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying, "email" character varying NOT NULL, "accessToken" character varying, "refreshToken" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
