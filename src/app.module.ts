import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CatagoriesController } from './controllers/catagories.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CatagoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
