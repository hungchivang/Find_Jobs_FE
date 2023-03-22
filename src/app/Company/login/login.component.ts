import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../model/Account";
import Swal from 'sweetalert2';

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
      this.loginService.findAccountByEmail(data.email).subscribe((data) => {
        this.newAcc = data;
        console.log(data)
          if(this.newAcc.status){
            this.successNotification();
            if(this.newAcc.role.id == 1){
              this.router.navigate(["/homeCompany"]);
            }else if(this.newAcc.role.id == 2){
              this.router.navigate(["/home"]);
            }else {
              this.router.navigate(["/adminCompany"]);
            }
          } else {
            this.errorNotification();
          }
      },(error) => {
        this.blockNotification();
      })
    },(error) => {
      this.errorNotification();
    })
  }

  successNotification() {
    Swal.fire('Hi', 'Đăng nhập thành công', 'success');
  }

  errorNotification() {
    Swal.fire('Hi', 'Không thể đăng nhập', 'error');
  }

  blockNotification() {
    Swal.fire('Hi', 'Tài khoản đã bị khóa', 'error');
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }
}
