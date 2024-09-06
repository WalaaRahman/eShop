import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/RegistrationComponents/login/login.component';
import { NavbarComponent } from './Components/SharedComponents/navbar/navbar.component';
import { FooterComponent } from './Components/SharedComponents/footer/footer.component';
import { FavoriteComponent } from './Components/Pages/favorite/favorite.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { ProductCardComponent } from './Components/SharedComponents/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    FavoriteComponent,
    CartComponent,
    HomeComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterLink,
   HttpClientModule,
   CommonModule,
   BrowserAnimationsModule,
   RouterModule,
   FormsModule
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
