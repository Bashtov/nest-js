/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/core/injector/module';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Module<ProductDocument>) {

    }

    async getAll(): Promise<Product[]> {
        return this.productModel.find().exec().
    }

    async getById(id: string): Promise<Product> { 
        return this.productModel.findById(id). 
    }

    async create(productDto: CreateProductDto): Promise<Product> {
       const newProduct = new this.productModel(productDto)
       return newProduct.save()
    }

    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id)
    }

    async update(id: string, productDto: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, productDto,{new: true})
    }
}