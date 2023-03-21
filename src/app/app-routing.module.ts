import { NgModule } from '@angular/core';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {RegistercompanyComponent} from "./Company/registercompany/registercompany.component";
import {LoginComponent} from "./Company/login/login.component";
import {HomecompanyComponent} from "./Company/homecompany/homecompany.component";
import {InformationcompanyComponent} from "./Company/informationcompany/informationcompany.component";
import {ShowNewComponent} from "./Show/show-new/show-new.component";
import {DetailsJobComponent} from "./Details/details-job/details-job.component";
import {CreateJobComponent} from "./Company/create-job/create-job.component";
import { ReactiveFormsModule } from '@angular/forms';
import {EditjobsComponent} from "./Company/editjobs/editjobs.component";




const routes: Routes = [
  {path:"registerCompany", component: RegistercompanyComponent },
  {path:"login", component: LoginComponent },
  {path:"homeCompany", component: HomecompanyComponent },
  {path:"informationCompany", component: InformationcompanyComponent },
  {path:"home", component: ShowNewComponent },
  {path:'detailsJob/:idJob', component: DetailsJobComponent },
  {path:'create', component: CreateJobComponent },
  {path:'editJob/:idJob', component: EditjobsComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,RouterOutlet,ReactiveFormsModule]
})

export class AppRoutingModule { }
