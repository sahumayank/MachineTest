import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {EndpointService} from './endpoint.service'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MasterCategoryComponent } from './master-category/master-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProductListComponent,
    WelcomeComponent,
    MasterCategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EndpointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
