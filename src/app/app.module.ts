import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './Shared/Header/header.component';
import {FooterComponent} from "./Shared/Footer/footer.component";
import {DetailPage} from "./detailPage/detail-page.component";
import {LoginPage} from "./loginPage/login-page.component";
import {ProductList} from "./product-list/product-list.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app.routing-module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailPage,
    FooterComponent,
    LoginPage,
    ProductList,
    NotFoundComponent
    // FormsModule
    // ProductsList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
