import {Component, OnInit} from '@angular/core';
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {ShowjobService} from "../../service/job/showjob.service";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login.service";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";
import {CompanyserviceService} from "../../service/companyService/companyservice.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-homecompany',
  templateUrl: './homecompany.component.html',
  styleUrls: ['./homecompany.component.css']
})
export class HomecompanyComponent implements OnInit {

  listJob: ListJobCompanyAccount[] = [];
  company !: CompanyAndAccount;

  accountToken !: AccountToken;

  ngOnInit(): void {
    this.informationCompany();
    this.findAllJob();

  }

  constructor(private showJobService: ShowjobService, private loginService: LoginService,
              private companyService: CompanyserviceService,private route: ActivatedRoute) {
  }

  findAllJob() {
    this.accountToken = this.loginService.getUserToken();
    this.showJobService.findAllJobInCompany(this.accountToken.email).subscribe(data => {
      this.listJob = data;
    }, error => {
      alert("loi")
    })
  }

  informationCompany() {
    this.accountToken = this.loginService.getUserToken();
    this.companyService.findAllCompany(this.accountToken.email).subscribe(data => {
      this.company = data;
    }, error => {
      alert("loi")
    })
  }


  blockJobByEmail(id:number) {
    this.showJobService.blockJobByCompany(id).subscribe((data) =>{
      console.log(data)
      this.findAllJob();
    })
  }

}
