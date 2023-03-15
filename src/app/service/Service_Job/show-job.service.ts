import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../../model/Job";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {ListTopCompany} from "../../model/ListTopCompany";

@Injectable({
  providedIn: 'root'
})
export class ShowJobService {

  constructor(private Http:HttpClient) {

  }

  getAllJob_Latest(page: number):Observable<ListJobCompanyAccount[]>{
    return  this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/showJobNew"+'?page='+page)
  }

  getOne_Job(id:number):Observable<ListJobCompanyAccount>{
    return this.Http.get<ListJobCompanyAccount>(`http://localhost:8080/job/showJobNew/${id}`)
  }
  searchbyCompany(short_name:string):Observable<ListJobCompanyAccount[]>{
    return this.Http.get<ListJobCompanyAccount[]>(`http://localhost:8080/job/searchCompany/${short_name}`)
  }

  getAllJob():Observable<ListJobCompanyAccount[]>{
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/showAllJob")
  }

  getTopCompany():Observable<ListTopCompany[]>{
    return this.Http.get<ListTopCompany[]>("http://localhost:8080/job/showTopCompany")
  }

  getallJob_byGuest():Observable<ListJobCompanyAccount[]>{
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/guest")
  }
}
