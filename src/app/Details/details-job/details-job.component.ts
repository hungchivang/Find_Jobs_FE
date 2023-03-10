import {Component, OnInit} from '@angular/core';
import {ShowJobService} from "../../service/Service_Job/show-job.service";

@Component({
  selector: 'app-details-job',
  templateUrl: './details-job.component.html',
  styleUrls: ['./details-job.component.css']
})
export class DetailsJobComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public servicerShow_New:ShowJobService) {
  }
  getOneJob(){

  }


}
