import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Product } from '../product/product.entity';
import { SubCategory } from '../subcategory/sub.entity';

@Entity()
export class Asset extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'int', nullable: false })
  public size: number;

  @Column({ name: 'content_type', type: 'varchar', nullable: false })
  public contentType: string;

  @Column({ type: 'varchar', nullable: false })
  public url: string;

  @OneToOne(
    type => SubCategory,
    subcategory => subcategory.photo,
  )
  subcategory: SubCategory;

  @ManyToOne(
    type => Product,
    product => product.photos,
    { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  product: Product;
}
