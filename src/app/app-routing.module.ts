import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { FavoriteComponent } from './Components/Pages/favorite/favorite.component';
import { LoginComponent } from './Components/RegistrationComponents/login/login.component';
import { CartComponent } from './Components/Pages/cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},

  {path:'favorite',component:FavoriteComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent},
  // {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
