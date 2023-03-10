import {Component, OnInit} from '@angular/core';
import {Job} from "../../model/Job";
import {ShowJobService} from "../../service/Service_Job/show-job.service";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit{

  ListJobnew:ListJobCompanyAccount[]=[]
  ngOnInit(): void {
    this.getAllJob_Latest();
  }

  constructor(private servicerShow_New:ShowJobService) {
  }
  getAllJob_Latest(){
    this.servicerShow_New.getAllJob_Latest().subscribe((data)=>{
      this.ListJobnew=data;
    })


  }

}
