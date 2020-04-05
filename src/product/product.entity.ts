import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength } from 'class-validator';

@Entity()
export class Product extends BaseEntity {
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
