import { BaseEntity, Entity, PrimaryGeneratedColumn, Column,  ManyToOne } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Asset extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'varchar', nullable: false })
  public name: string;

  @Column({ type: 'int', nullable: false })
  public size: number;

  @Column({ name: 'content_type', type: 'varchar', nullable: false })
  public contentType: string;

  @Column({ type: 'varchar', nullable: false })
  public url: string;

  @ManyToOne(
    type => Product,
    product => product.photos,
    { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  product: Product;
}
