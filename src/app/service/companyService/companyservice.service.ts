import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../../model/Account";
import {Observable} from "rxjs";
import {Company} from "../../model/Company";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";
import {Job} from "../../model/Job";

@Injectable({
  providedIn: 'root'
})
export class CompanyserviceService {

  constructor(private http: HttpClient) { }

  editCompany(company : any):Observable<Company>{
    return this.http.post<Company>("http://localhost:8080/company",company );
  }

  findAllCompany(email : string):Observable<CompanyAndAccount>{
    return this.http.get<any>("http://localhost:8080/company/showCompany/" + email);
  }
  findOneConpanyByib(idJob:number):Observable<ListJobCompanyAccount>{
    return this.http.get<ListJobCompanyAccount>(`http://localhost:8080/company/businessUserDetails/${idJob}`)
  }



}
