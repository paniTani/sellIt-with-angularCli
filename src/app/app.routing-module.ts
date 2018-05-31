import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {ProductList} from "./product-list/product-list.component";
import {LoginPage} from "./loginPage/login-page.component";
import {DetailPage} from "./detailPage/detail-page.component";
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'productList', component: ProductList },
  { path: 'detailPage', component: DetailPage },
  { path: 'loginPage', component: LoginPage },
  { path: '', redirectTo: 'productList', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // imports: [ BrowserModule, RouterModule.forRoot(routes)],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
