import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  NotFoundException,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: 'OK',
      limit,
      offset,
      brand,
      data: this.productsService.findAll(),
    };
  }

  // @Get('filter')
  // getProductFilter(): string[] {
  //   return ['😆', '🐮', 'filter'];
  // }

  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto): any {
    return this.productsService.create(payload);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() payload: UpdateProductDto,
  ): any {
    console.log(payload);
    const product = this.productsService.findOne(+id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (!product) {
      return {
        message: 'Product not found',
      };
    }
    return '👍';
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): any {
    const product = this.productsService.findOne(+id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return '👍';
  }
}
