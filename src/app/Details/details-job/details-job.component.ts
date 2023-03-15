import {Component, OnInit} from '@angular/core';
import {ShowJobService} from "../../service/Service_Job/show-job.service";
import {ActivatedRoute} from "@angular/router";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";

@Component({
  selector: 'app-details-job',
  templateUrl: './details-job.component.html',
  styleUrls: ['./details-job.component.css']
})
export class DetailsJobComponent implements OnInit {
  JobCompanyAccount!: ListJobCompanyAccount
  ListJobnew: ListJobCompanyAccount[] = []


  id!: number;
  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe((Param) => {
      this.id = +Param["idJob"]
    })
    this.getOneJob(this.id)
    this.getAllJob_Latest()
  }

  constructor(public servicerShow_New: ShowJobService, private router: ActivatedRoute) {
  }

  getOneJob(id: number) {
    this.servicerShow_New.getOne_Job(id).subscribe((data) => {
      this.JobCompanyAccount = data;
    })

  }

  getAllJob_Latest() {
    this.servicerShow_New.getAllJob_Latest(this.p).subscribe((data) => {
      this.ListJobnew = data;
      this.total = this.ListJobnew.length;
    })


  }


}
