import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {HttpClient} from "@angular/common/http";
import {Job} from "../../model/Job";

@Injectable({
  providedIn: 'root'
})
export class ShowjobService{

  constructor(private http:HttpClient) { }

  findAllJobInCompany(email : string):Observable<ListJobCompanyAccount[]>{
    return this.http.get<any>(`http://localhost:8080/job/showJob/` + email);
  }

  blockJobByCompany(id : number): Observable<Job>{
    return this.http.get<Job>(`http://localhost:8080/job/block/` + id);
  }

}
