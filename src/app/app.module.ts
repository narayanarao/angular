import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactory, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule}  from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { FormsModule } from '@angular/forms';
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'allproducts',component:AllproductsComponent},
  {path:'updateproduct',component:UpdateproductComponent},
  {path:'deleteproduct',component:DeleteproductComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    AllproductsComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
