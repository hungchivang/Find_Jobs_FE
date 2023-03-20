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

  ngOnInit(): void {
    this.getall_Guest()
  }
  constructor(private servicerShow_New: ShowJobService,private loginService:LoginService,private messageService:MessageService,private router:Router) {
  }

  getall_Guest(){
    this.servicerShow_New.getallJob_byGuest().subscribe((data)=>{
      this.ListJobnew=data;
      // this.showError();
    })
  }

  // click(){
  //   // alert("Bạn phải đăng nhập mới dùng được chức năng này!")
  //   this.showWarn()
  //   this.router.navigate(["/login"])
  //
  //
  //
  // }
  // showWarn() {
  //   this.messageService.add({severity:'warn', summary: 'Cảnh báo', detail: 'Bạn không có quyền truy cập ',key: 'tc'});
  // }

  showError() {
    this.messageService.add({severity:'error', summary: 'Cảnh báo', detail: 'Bạn không có quyền truy cập',key: 'tc'});
  }
}
