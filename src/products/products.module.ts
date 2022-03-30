/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './dto/products.service';
import { ProductsController } from './products.controller';
import { Product } from './schemas/product.schema';
 
@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: Product.schema}
    ])
  ]
})
export class ProductsModule{}