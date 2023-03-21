import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistercompanyComponent } from './Company/registercompany/registercompany.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './Company/login/login.component';
import { HomecompanyComponent } from './Company/homecompany/homecompany.component';
import {AuthInterceptor} from "./auth.interceptor";
import { InformationcompanyComponent } from './Company/informationcompany/informationcompany.component';
import { ShowNewComponent } from './Show/show-new/show-new.component';
import { DetailsJobComponent } from './Details/details-job/details-job.component';
import { CreateJobComponent } from './Company/create-job/create-job.component';
import { EditjobsComponent } from './Company/editjobs/editjobs.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistercompanyComponent,
    LoginComponent,
    HomecompanyComponent,
    InformationcompanyComponent,
    ShowNewComponent,
    DetailsJobComponent,
    CreateJobComponent,
    EditjobsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule{ }
