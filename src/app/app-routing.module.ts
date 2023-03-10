import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistercompanyComponent} from "./Company/registercompany/registercompany.component";
import {LoginComponent} from "./Company/login/login.component";
import {ShowNewComponent} from "./Show/show-new/show-new.component";
import {DetailsJobComponent} from "./Details/details-job/details-job.component";


const routes: Routes = [
  {path:"registerCompany", component: RegistercompanyComponent },
  {path:"login", component: LoginComponent },
  {path:"home", component: ShowNewComponent },
  {path:'detailsJob/:idJob', component: DetailsJobComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
