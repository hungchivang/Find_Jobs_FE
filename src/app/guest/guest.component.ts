import {Component, OnInit} from '@angular/core';
import {ListJobCompanyAccount} from "../model/ListJobCompanyAccount";
import {ShowJobService} from "../service/Service_Job/show-job.service";
import {LoginService} from "../service/login.service";
import {MessageService} from 'primeng/api';
import {Router} from "@angular/router";


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  providers: [MessageService]


})

export class GuestComponent implements OnInit{
  ListJobnew: ListJobCompanyAccount[] = []
  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.getAllJob_Latest()
  }
  constructor(private servicerShow_New: ShowJobService,private loginService:LoginService,private messageService:MessageService,private router:Router) {
  }

  // getall_Guest(){
  //   this.servicerShow_New.getallJob_byGuest().subscribe((data)=>{
  //     this.ListJobnew=data;
  //     // this.showError();
  //   })
  // }

  showError() {
    this.messageService.add({severity:'error', summary: 'Cảnh báo', detail: 'Bạn không có quyền truy cập, Vui lòng đăng nhập để thực hiện!',key: 'tc'});
  }
  getAllJob_Latest() {
    this.servicerShow_New.getAllJob_Latest(this.p).subscribe((data) => {
      this.ListJobnew = data;
      this.total = this.ListJobnew.length;
    })
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getAllJob_Latest();
  }
  getAllJob() {
    this.servicerShow_New.getAllJob().subscribe((data) => {
      this.ListAllJob = data;
    })
  }

  getTopCompany() {
    this.servicerShow_New.getTopCompany().subscribe((data) => {
      this.ListTopCompany = data;
    })
  }

}
