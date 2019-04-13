import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AlertComponent } from './dashboard/alert/alert.component';
import { JumboComponent } from './dashboard/jumbo/jumbo.component';
import { StarterComponent } from './dashboard/starter/starter.component';
import { RmComponent } from './rm/rm.component';
import { FormsComponent } from './forms/forms.component';
import { DataDrivenFormsComponent } from './forms/data-driven-forms/data-driven-forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { from } from 'rxjs';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { MobfltPipe } from './pipes/mobflt.pipe';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AlertComponent,
    JumboComponent,
    StarterComponent,
    RmComponent,
    FormsComponent,
    DataDrivenFormsComponent,
    TemplateDrivenFormsComponent,
    HttpComponent,
    PipesComponent,
   CustomPipe,
   MobfltPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,         // template driven
    ReactiveFormsModule ,  // data driven
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
