import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '../category/category.repository';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryRepository]),
    AuthorizationModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
