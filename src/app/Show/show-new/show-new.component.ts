import {Component, OnInit} from '@angular/core';
import {Job} from "../../model/Job";
import {ShowJobService} from "../../service/Service_Job/show-job.service";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {
  formsearch!: FormGroup
  account!:AccountToken;
  ListJobnew: ListJobCompanyAccount[] = []


  ngOnInit(): void {
    this.getAllJob_Latest();
    this.formsearch = new FormGroup({
      short_name: new FormControl("")
    })
    this.account = this.loginService.getUserToken();
  }

  constructor(private servicerShow_New: ShowJobService,private loginService:LoginService) {
  }

  getAllJob_Latest() {
    this.servicerShow_New.getAllJob_Latest().subscribe((data) => {
      this.ListJobnew = data;
    })
  }





  searchbyCompany() {
    let value = this.formsearch.get('short_name')?.value
    this.servicerShow_New.searchbyCompany(value).subscribe((data) => {
      this.ListJobnew = data;
    })

  }

}
