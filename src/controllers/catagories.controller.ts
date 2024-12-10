import { Controller, Get, Param } from '@nestjs/common';
@Controller('catagories')
export class CatagoriesController {
  @Get(':categoryId/products/:productId')
  getCategoryProduct(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ): string[] {
    return ['🐮', categoryId, '😆', productId];
  }
}
