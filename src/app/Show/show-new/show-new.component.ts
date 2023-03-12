import {Component, OnInit} from '@angular/core';
import {Job} from "../../model/Job";
import {ShowJobService} from "../../service/Service_Job/show-job.service";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {
  formsearch!: FormGroup

  ListJobnew: ListJobCompanyAccount[] = []


  ngOnInit(): void {
    this.getAllJob_Latest();
    this.formsearch = new FormGroup({
      short_name: new FormControl("")
    })


  }

  constructor(private servicerShow_New: ShowJobService) {
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
