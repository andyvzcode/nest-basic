import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: '🐮',
      price: 100,
      description: 'un producto',
      category: '🐄',
      image: 'https://i.imgur.com/5x1Oq2k.jpg',
    },
    {
      id: 2,
      name: '🐷',
      price: 200,
      description: 'otro producto',
      category: '🐄',
      image: 'https://i.imgur.com/5x1Oq2k.jpg',
    },
    {
      id: 3,
      name: '🐔',
      price: 300,
      description: 'un producto muy especial',
      category: '🐄',
      image: 'https://i.imgur.com/5x1Oq2k.jpg',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  create(payload: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);

    this.products[index] = {
      ...this.products[index],
      ...payload,
    };

    return this.products[index];
  }
}
