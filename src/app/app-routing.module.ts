import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/dashboard/add-product/add-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditUserComponent } from './components/dashboard/edit-user/edit-user.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsersComponent } from './components/users/users.component';
import { RouteEnum } from './RouteEnum.enum';

const routes: Routes = [
  {path : RouteEnum.LOGIN, component:LoginComponent},
  {path : RouteEnum.DASHBOARD, component:DashboardComponent},
  {path : RouteEnum.USERS, component:UsersComponent},
  {path : RouteEnum.PRODUCTOS, component:ProductosComponent},
  {path : RouteEnum.EDITPRODUCT, component:EditProductComponent},
  {path : RouteEnum.EDITUSER, component:EditUserComponent},
  {path : RouteEnum.ADDPRODUCT, component:AddProductComponent},
  {path:'', redirectTo:RouteEnum.DASHBOARD, pathMatch:'full'},
  {path:'**', redirectTo:RouteEnum.DASHBOARD, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
