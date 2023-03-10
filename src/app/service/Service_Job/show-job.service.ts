import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../../model/Job";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";

@Injectable({
  providedIn: 'root'
})
export class ShowJobService {

  constructor(private Http:HttpClient) {

  }

  getAllJob_Latest():Observable<ListJobCompanyAccount[]>{
   return  this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/showJobNew")
  }
  getOne_Job(id:number):Observable<ListJobCompanyAccount>{
    return this.Http.get<ListJobCompanyAccount>(`http://localhost:8080/job/showJobNew/${id}`)
  }
}
