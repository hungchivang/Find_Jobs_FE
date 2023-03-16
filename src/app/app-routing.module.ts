import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistercompanyComponent} from "./Company/registercompany/registercompany.component";
import {LoginComponent} from "./Company/login/login.component";
import {HomecompanyComponent} from "./Company/homecompany/homecompany.component";
import {InformationcompanyComponent} from "./Company/informationcompany/informationcompany.component";
import {ShowNewComponent} from "./Show/show-new/show-new.component";
import {DetailsJobComponent} from "./Details/details-job/details-job.component";
import {GuestComponent} from "./guest/guest.component";
import {BusinessUserDetailsComponent} from "./Details/business-user-details/business-user-details.component";
import {EditUserComponent} from "./User/edit-user/edit-user.component";
import {InfoDetailCompanyComponent} from "./Company/info-detail-company/info-detail-company.component";
import {AdminCompanyComponent} from "./admin-company/admin-company.component";

const routes: Routes = [
  {path:"registerCompany", component: RegistercompanyComponent },
  {path:"login", component: LoginComponent },
  {path:"homeCompany", component: HomecompanyComponent },
  {path:"informationCompany", component: InformationcompanyComponent },
  {path:"home", component: ShowNewComponent },
  {path:'detailsJob/:idJob', component: DetailsJobComponent },
  {path:'guest', component: GuestComponent },
  {path:'businessUserDetails/:idJob', component: BusinessUserDetailsComponent },
  {path:'edit/:email', component: EditUserComponent },
  {path:'InfoJobDetail/:idJob', component: InfoDetailCompanyComponent },
  {path:"adminCompany", component: AdminCompanyComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
