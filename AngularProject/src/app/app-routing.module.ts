import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { MasterCategoryComponent } from './master-category/master-category.component';
import {ProductListComponent} from "./product-list/product-list.component"
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  }, {
    path: "sessionOut",
    component: LoginComponent
  }
  , {
    path: "logout",
    component: LoginComponent
  },
  {
    path: "productList",
    component: ProductListComponent
  },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "masterCategory",
    component: MasterCategoryComponent
  },
  {
    path: "subCategory",
    component: SubCategoryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
