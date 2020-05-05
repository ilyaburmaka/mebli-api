import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { MulterModule } from '@nestjs/platform-express';
import { AssetsModule } from '../assets/assets.module';
import { AssetsRepository } from '../assets/assets.repository';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    TypeOrmModule.forFeature([ProductRepository,AssetsRepository]),
    AssetsModule,
    AuthorizationModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
