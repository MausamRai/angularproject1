import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
console.log('i am from product module');
@NgModule({
  declarations: [ProductListComponent, ProductAddComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
