import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { componentFactoryName } from '../../node_modules/@angular/compiler';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},  // for fetching data for home component
      {path: "product", component: ProductComponent},  // for fetching data for product component
      {path: "updateProduct/:id", component: UpdateProductComponent}  // for fetching data for product component
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
