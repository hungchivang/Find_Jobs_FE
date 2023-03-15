import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Job} from "../../model/Job";
import {ShowJobService} from "../../service/Service_Job/show-job.service";
import {ListJobCompanyAccount} from "../../model/ListJobCompanyAccount";
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountToken} from "../../model/AccountToken";
import {LoginService} from "../../service/login.service";
import {Category} from "../../model/Category";
import {Locations} from "../../model/Locations";

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {
  formsearch!: FormGroup;
  account!:AccountToken;
  ListJobnew: ListJobCompanyAccount[] = []
  ListCategory:Category[] = [];
  ListLocation : Locations[]=[];
  formSearchJob!:FormGroup;

  ngOnInit(): void {
    this.getAllJob_Latest();
    this.getListLocation();
    this.getListCategory();

    this.formsearch = new FormGroup({
      short_name: new FormControl("")
    })

    this.formSearchJob = new FormGroup({
      searchByName: new FormControl(),
      searchByCategory: new FormGroup({
        idCategory: new FormControl("all_c"),
      }),
      searchByLocation: new FormGroup({
        idLocation: new FormControl("all_l")
      })
    })

    this.account = this.loginService.getUserToken();
  }


  constructor(private servicerShow_New: ShowJobService,private loginService:LoginService) { }

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

  // show list category,location
  getListCategory(){
    this.servicerShow_New.getAllCategory().subscribe(data => {
      this.ListCategory = data;})
  }

  getListLocation(){
    this.servicerShow_New.getAllLocation().subscribe(data => {
      this.ListLocation = data;
    })
  }



// @ts-ignore
  searchBy3Filed(){
    let searchByName = this.formSearchJob.get('searchByName')?.value;
    console.log(searchByName)
    let searchByCategory =this.formSearchJob.get("searchByCategory")?.value.idCategory;
    console.log(searchByCategory)
    let searchByLocation = this.formSearchJob.get('searchByLocation')?.value.idLocation;
    console.log(searchByLocation)

    if(searchByName!=null &&searchByCategory == "all_c" && searchByLocation == "all_l"){
      return this.servicerShow_New.searchJobsByTitleOrAddress(searchByName).subscribe((data) => {
        this.ListJobnew = data;})
    }

    if(searchByName==null &&searchByCategory != "all_c" && searchByLocation == "all_l"){
      return this.servicerShow_New.searchJobsByNameCategory(searchByCategory).subscribe((data) => {
        this.ListJobnew = data;})
    }

    if(searchByName==null &&searchByCategory == "all_c" && searchByLocation != "all_l"){
      return this.servicerShow_New.searchJobsByNameLocation(searchByLocation).subscribe((data) => {
        this.ListJobnew = data;})
    }

    if(searchByName!=null &&searchByCategory != "all_c" && searchByLocation != "all_l"){
      return this.servicerShow_New.searchJobsByTitleAddressCategoryLocation(searchByName,searchByCategory,searchByLocation).subscribe((data) => {
        this.ListJobnew = data;})
    }

    if(searchByName!=null &&searchByCategory != "all_c" && searchByLocation == "all_l"){
      return this.servicerShow_New.searchJobsByTitleAndAddressAndCategory(searchByName,searchByCategory).subscribe((data) => {
        this.ListJobnew = data;})
    }

    if(searchByName!=null &&searchByCategory == "all_c" && searchByLocation != "all_l"){
      return this.servicerShow_New.searchJobsByTitleAndAddressAndLocation(searchByName,searchByLocation).subscribe((data) => {
        this.ListJobnew = data;})
    }

    if(searchByName==null &&searchByCategory != "all_c" && searchByLocation != "all_l"){
      return this.servicerShow_New.searchJobsByCategoryAndLocation(searchByCategory,searchByLocation).subscribe((data) => {
        this.ListJobnew = data;})
    }
  }

  reset() {
      this.formSearchJob.setValue({
        searchByName:'',
        searchByCategory:{
          idCategory:'all_c'
        },
        searchByLocation:{
          idLocation:'all_l'
        }
      })

  }





}
