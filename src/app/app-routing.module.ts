import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RmComponent } from './rm/rm.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', redirectTo: ''},
  { path: 'dash', component: DashboardComponent},
  { path: 'rm', component: RmComponent},
  { path: '**', redirectTo: 'rm'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
