import { CreateUpdateProductDto } from './dto/create-update.product.dto';
import { ProductService } from './product.service';
import { Product } from './product.entity';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<Product[]>;
    getProduct(id: number): Promise<Product>;
    uploadFile(files: any): void;
    createProduct(createProductEntity: CreateUpdateProductDto): Promise<Product>;
}
