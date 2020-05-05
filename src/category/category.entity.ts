import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { CategoryTypeEnum } from './category.type.enum';
import { SubCategory } from '../subcategory/sub.entity';
import { Product } from '../product/product.entity';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'name_ua', nullable: true })
  name: string;

  @Column({ name: 'name_rus', nullable: true })
  nameRu: string;

  @Column({ name: 'name_eng', nullable: true })
  nameEn: string;

  @Column()
  type: CategoryTypeEnum;

  @OneToMany(
    type => SubCategory,
    sub => sub.category,
    { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  subcategory: SubCategory[];


  //
  // @OneToMany(
  //   type => Product,
  //   product => product.category,
  //   { eager: true },
  // )
  // products: Product[];
}
