import {
  Column,
  Entity,
} from 'typeorm';
import { BaseModel } from './base-model';

@Entity()
export class User extends BaseModel {
  @Column({ type: 'varchar', nullable: true })
  name?: string;

  @Column({ type: 'varchar' })
  email!: string;

  @Column({ type: 'varchar', nullable: true })
  accessToken?: Date;

  @Column({ type: 'varchar', nullable: true })
  refreshToken?: Date;
}
