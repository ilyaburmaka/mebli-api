import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUpdateProductDto } from './dto/create-update.product.dto';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get('/:id')
  getProduct(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createProduct(@Body() createProductEntity: CreateUpdateProductDto) {
    return this.productService.createProduct(createProductEntity);
  }
}
