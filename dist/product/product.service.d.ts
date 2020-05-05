import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { CreateUpdateProductDto } from './dto/create-update.product.dto';
export declare class ProductService {
    readonly productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    getProducts(): Promise<Product[]>;
    createProduct(createProductEntity: CreateUpdateProductDto): Promise<Product>;
    getProduct(id: number): Promise<Product>;
}
