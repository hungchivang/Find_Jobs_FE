import {Component, OnInit} from '@angular/core';
import {ListJobCompanyAccount} from "../model/ListJobCompanyAccount";
import {ShowJobService} from "../service/Service_Job/show-job.service";
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit{
  ListJobnew: ListJobCompanyAccount[] = []

  ngOnInit(): void {
    this.getall_Guest()
  }
  constructor(private servicerShow_New: ShowJobService,private loginService:LoginService) {
  }
  getall_Guest(){
    this.servicerShow_New.getallJob_byGuest().subscribe((data)=>{
      this.ListJobnew=data;
    })
  }
  click(){
    alert("Ban phải đăng nhập mới dùng được chức năng này !")
  }

}
