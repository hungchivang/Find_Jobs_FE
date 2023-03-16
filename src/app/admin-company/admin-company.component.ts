import {Component, OnInit} from '@angular/core';
import {CompanyserviceService} from "../service/companyService/companyservice.service";
import {ListJobCompanyAccount} from "../model/ListJobCompanyAccount";
import {CompanyAndAccount} from "../model/CompanyAndAccount";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.css']
})
export class AdminCompanyComponent implements OnInit{
  p: number = 1;
  total: number = 0;

  ListCompany:CompanyAndAccount[]=[]



  ngOnInit(): void {
    this.getallCompany()


  }

  constructor(public CompanyserviceService:CompanyserviceService) {
  }

  getallCompany(){
    this.CompanyserviceService.getallCompanyNoEmail(this.p).subscribe((data)=>{
      this.ListCompany = data;
      this.total = this.ListCompany.length;
    })

  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.getallCompany();
  }

  blockCompany(id:number){
    this.CompanyserviceService.blokCompany(id).subscribe((data)=>{
      this.getallCompany()

    })
  }


}
