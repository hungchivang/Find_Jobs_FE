import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistercompanyComponent } from './Company/registercompany/registercompany.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './Company/login/login.component';
import { HomecompanyComponent } from './Company/homecompany/homecompany.component';
import {AuthInterceptor} from "./auth.interceptor";
import { InformationcompanyComponent } from './Company/informationcompany/informationcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistercompanyComponent,
    LoginComponent,
    HomecompanyComponent,
    InformationcompanyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule{ }
