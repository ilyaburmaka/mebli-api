import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength } from 'class-validator';

export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @MaxLength(50)
  materials: string;

  @Column()
  description: string;
}
