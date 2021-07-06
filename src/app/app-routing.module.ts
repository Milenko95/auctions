import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsComponent } from './auctions/auctions/auctions.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'auctions', component: AuctionsComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
