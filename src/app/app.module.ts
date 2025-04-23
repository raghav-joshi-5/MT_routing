import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UserComponent } from './shared/component/user/user.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserformComponent } from './shared/component/userform/userform.component';
import { RemoveComponent } from './shared/component/remove/remove.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProductComponent } from './shared/component/product/product.component';
import { ProductformComponent } from './shared/component/productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    UsersComponent,
    UserformComponent,
    RemoveComponent,
    ProductsComponent,
    ProductComponent,
    ProductformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
