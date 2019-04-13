import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RmComponent } from './rm/rm.component';
import { StarterComponent } from './dashboard/starter/starter.component';
import { AlertComponent } from './dashboard/alert/alert.component';
import { JumboComponent } from './dashboard/jumbo/jumbo.component';
import { ProtectGuard } from './dashboard/protect.guard';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { DataDrivenFormsComponent } from './forms/data-driven-forms/data-driven-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpComponent } from './http/http.component';

const dashRoutes: Routes = [
  {path: 'starter', component: StarterComponent},
  {path: 'jumbo', component: JumboComponent},
  {path: 'alert', component: AlertComponent},
];
const formsRoutes: Routes = [
  {path: 'td', component: TemplateDrivenFormsComponent},
  {path: 'dd', component: DataDrivenFormsComponent}
  ];
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', redirectTo: ''},
  { path: 'dash/:usNm', component: DashboardComponent, children: dashRoutes, canActivate: [ProtectGuard]},
  { path: 'rm/:usNm', component: RmComponent},
  {path: 'forms', component: FormsComponent, children: formsRoutes},
   {path: 'http', component: HttpComponent},
  {path: 'pipe', component: PipesComponent},
  { path: '**', redirectTo: 'rm/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
