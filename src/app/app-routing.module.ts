import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserformComponent } from './shared/component/userform/userform.component';
import { UserComponent } from './shared/component/user/user.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProductformComponent } from './shared/component/productform/productform.component';
import { ProductComponent } from './shared/component/product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users Dashboard',
  },
  {
    path: 'users/adduser',
    component: UserformComponent,
    title: 'Add user Form',
  },
  {
    path: 'users/:userId',
    component: UserComponent,
    title: 'User Details',
  },
  {
    path: 'users/:userId/edituser',
    component: UserformComponent,
    title: 'Update User Form',
  },

  {
    path: 'products',
    component: ProductsComponent,
    title: 'product Dashboard',
  },
  {
    path: 'products/addproduct',
    component: ProductformComponent,
    title: 'Add product Form',
  },
  {
    path: 'products/:pid',
    component: ProductComponent,
    title: 'product Details',
  },
  {
    path: 'products/:pid/editproduct',
    component: ProductformComponent,
    title: 'Update product Form',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
