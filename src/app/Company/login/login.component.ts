import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  RegexAlphaNumeric = "^[a-zA-Z0-9]{8,16}";
  ngOnInit(): void {
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.RegexAlphaNumeric)])
  })

  login() {
    this.loginService.login(this.loginForm.value).subscribe(data => {
      this.loginService.setUserToken(data);
      this.loginService.setToken(data.token);
      alert("ok")
      this.router.navigate([""]);
    })
  }
}
