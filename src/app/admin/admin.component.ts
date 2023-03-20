import {Component, OnInit} from '@angular/core';
import {CompanyAndAccount} from "../model/CompanyAndAccount";
import {CompanyserviceService} from "../service/companyService/companyservice.service";
import {ListJobCompanyAccount} from "../model/ListJobCompanyAccount";
import {ShowJobService} from "../service/Service_Job/show-job.service";
import {Account} from "../model/Account";
import {AccountserviceService} from "../service/accountService/accountservice.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  ListCompany:CompanyAndAccount[]=[]
  ListAdminJob: ListJobCompanyAccount[] = [];
  ListAccount:Account[]=[]


  ngOnInit(): void {
    this.getallCompanylimit3()
    this.getAdminJoblimit3()
    this.getallUserlimit3()
  }
  constructor(public CompanyserviceService:CompanyserviceService,private servicerShow_New: ShowJobService,public AccountService:AccountserviceService) {
  }
  getallCompanylimit3(){
    this.CompanyserviceService.getallCompanylimit3().subscribe((data)=>{
      this.ListCompany = data;
    })
  }
  getAdminJoblimit3() {
    this.servicerShow_New.getAdminJoblimit3().subscribe((data) => {
      this.ListAdminJob = data;

    })
  }
  getallUserlimit3() {
    this.AccountService.getallUserlimit3().subscribe((data)=>{
      this.ListAccount=data;

    })
  }

}
