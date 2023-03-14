import { Injectable } from '@angular/core';
import {Account} from "../../model/Account";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CompanyAndAccount} from "../../model/CompanyAndAccount";

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http: HttpClient) { }

  editAccount(account : any):Observable<Account>{
    return this.http.post<Account>("http://localhost:8080/account",account );
  }
  findUserbyemail(email:string):Observable<Account>{
    return this.http.get<Account>(`http://localhost:8080/account/editUser/${email}`)
  }

  editUser(account:Account):Observable<Account>{
  return   this.http.post<Account>("http://localhost:8080/account/editUser",account)
  }
}
