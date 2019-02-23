import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RmComponent } from './rm/rm.component';
import { StarterComponent } from './dashboard/starter/starter.component';
import { AlertComponent } from './dashboard/alert/alert.component';
import { JumboComponent } from './dashboard/jumbo/jumbo.component';
import { ProtectGuard } from './dashboard/protect.guard';



const dashRoutes: Routes = [
  {path: 'starter', component: StarterComponent},
  {path: 'jumbo', component: JumboComponent},
  {path: 'alert', component: AlertComponent}
];
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', redirectTo: ''},
  { path: 'dash/:usNm', component: DashboardComponent, children: dashRoutes, canActivate: [ProtectGuard]},
  { path: 'rm/:usNm', component: RmComponent},
  { path: '**', redirectTo: 'rm/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
