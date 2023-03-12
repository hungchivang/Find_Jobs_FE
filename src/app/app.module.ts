import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistercompanyComponent } from './Company/registercompany/registercompany.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './Company/login/login.component';
import { ShowAllComponent } from './Show/showAll/show-all.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistercompanyComponent,
    LoginComponent,
    ShowAllComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
