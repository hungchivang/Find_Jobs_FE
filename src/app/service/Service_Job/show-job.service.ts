import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../../model/Job";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {Category} from "../../model/Category";
import {Locations} from "../../model/Locations";

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
  searchbyCompany(short_name:string):Observable<ListJobCompanyAccount[]>{
    return this.Http.get<ListJobCompanyAccount[]>(`http://localhost:8080/job/searchCompany/${short_name}`)
  }


  getAllCategory():Observable<Category[]>{
    return  this.Http.get<Category[]>("http://localhost:8080/category")
  }

  getAllLocation():Observable<Locations[]>{
    return  this.Http.get<Locations[]>("http://localhost:8080/location")
  }

  // 7 API search job
  searchJobsByTitleOrAddress(key:string):Observable<ListJobCompanyAccount[]>{
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/searchJobsByTitleOrAddress?key=" + key)
  }


  searchJobsByNameCategory(idCategory:number):Observable<ListJobCompanyAccount[]>{
    return this.Http.get<ListJobCompanyAccount[]>(`http://localhost:8080/job/searchJobsByNameCategory?idCategory=` + idCategory)
  }

  searchJobsByNameLocation(idLocation:number):Observable<ListJobCompanyAccount[]>{
    return this.Http.get<ListJobCompanyAccount[]>(`http://localhost:8080/job/searchJobsByNameLocation?idLocation=` + idLocation)
  }

  searchJobsByTitleAndAddressAndCategory(key:String, idCategory:number): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/searchJobsByTitleAndAddressAndCategory?key=" + key + "&idCategory=" + idCategory)
  }

  searchJobsByTitleAndAddressAndLocation(key:String, idLocation:number): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/searchJobsByTitleAndAddressAndLocation?key=" + key + "&idLocation=" + idLocation)
  }

  searchJobsByCategoryAndLocation(idCategory:number, idLocation:number): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/searchJobsByCategoryAndLocation?idCategory=" + idCategory + "&idLocation=" + idLocation)
  }

  searchJobsByTitleAddressCategoryLocation(key:String,idCategory:number, idLocation:number): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/searchJobsByTitleAddressCategoryLocation?key=" + key + "&idCategory=" + idCategory + "&idLocation=" + idLocation)
  }

  //sort job by salary
  sortJobBySalaryMin(): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/sortJobBySalaryMin")
  }

  sortJobBySalary1000(): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/sortJobBySalary1000")
  }

  sortJobBySalary2000(): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/sortJobBySalary2000")
  }

  sortJobBySalaryMax(): Observable<ListJobCompanyAccount[]> {
    return this.Http.get<ListJobCompanyAccount[]>("http://localhost:8080/job/sortJobBySalaryMax")
  }

}
