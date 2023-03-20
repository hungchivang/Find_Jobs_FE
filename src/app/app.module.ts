import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistercompanyComponent} from './Company/registercompany/registercompany.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './Company/login/login.component';
import {HomecompanyComponent} from './Company/homecompany/homecompany.component';
import {AuthInterceptor} from "./auth.interceptor";
import {InformationcompanyComponent} from './Company/informationcompany/informationcompany.component';
import {ShowNewComponent} from './Show/show-new/show-new.component';
import {DetailsJobComponent} from './Details/details-job/details-job.component';
import {GuestComponent} from './guest/guest.component';
import {BusinessUserDetailsComponent} from './Details/business-user-details/business-user-details.component';
import {EditUserComponent} from './User/edit-user/edit-user.component';
import {NgxPaginationModule} from "ngx-pagination";
import {InfoDetailCompanyComponent} from './Company/info-detail-company/info-detail-company.component';
import {AdminJobComponent} from './admin-job/admin-job.component';
import {AdminCompanyComponent} from './admin-company/admin-company.component';
import {AdminUserComponent} from './admin-user/admin-user.component';
import {AdminComponent} from './admin/admin.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [
    AppComponent,
    RegistercompanyComponent,
    LoginComponent,
    HomecompanyComponent,
    InformationcompanyComponent,
    ShowNewComponent,
    DetailsJobComponent,
    GuestComponent,
    BusinessUserDetailsComponent,
    EditUserComponent,
    InfoDetailCompanyComponent,
    AdminJobComponent,
    InfoDetailCompanyComponent,
    AdminCompanyComponent,
    AdminUserComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,SplitButtonModule,BrowserAnimationsModule,ToastModule


  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})

export class AppModule {
}
