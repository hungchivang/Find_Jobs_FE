import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../model/Account";
import {AccountToken} from "../../model/AccountToken";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  RegexAlphaNumeric = "^[a-zA-Z0-9]{8,16}";

  ngOnInit(): void {
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.RegexAlphaNumeric)])
  })

  newAcc!: Account;
  login() {
    this.loginService.login(this.loginForm.value).subscribe(data => {
      this.loginService.setUserToken(data);
      this.loginService.setToken(data.token);
      console.log(data);
      this.loginService.findAccountByEmail(data.email).subscribe(data => {
        this.newAcc = data;
        console.log(this.newAcc)
        if(this.newAcc.status){
          console.log(this.newAcc.status)
          alert("Đăng nhập thành công")
          if(this.newAcc.role.id == 1){
            this.router.navigate(["/homeCompany"]);
          }else if(this.newAcc.role.id == 2){
            this.router.navigate(["/home"]);
          }else {
            this.router.navigate([""]);
          }

        } else {
          alert("Tài khoản đã bị khóa")
        }
      })
    })
  }
}
