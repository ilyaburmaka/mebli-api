import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from 'typeorm';
import { IsUUID } from 'class-validator';
import { CategoryTypeEnum } from './category.type.enum';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  type: CategoryTypeEnum;
}
