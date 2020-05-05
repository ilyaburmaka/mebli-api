import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateUpdateProductDto } from './dto/create-update.product.dto';
export declare class ProductRepository extends Repository<Product> {
    getProducts(): Promise<Product[]>;
    createProduct(createProductEntity: CreateUpdateProductDto): Promise<Product>;
    updateProduct(): Promise<number>;
    removeProduct(): Promise<number>;
}
