import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegistercompanyService} from "../../service/registercompany.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../model/Account";
import {Role} from "../../model/Role";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css'],
  providers: [MessageService]

})
export class RegistercompanyComponent implements OnInit {
  RegexAlphaNumeric = "^[a-zA-Z0-9]{8,16}";
  account!: Account;
  selectedOption: any;
  idRole!: any;
  roles: Role[] = [];

  ngOnInit(): void {
  }

  constructor(private registerCompanyService: RegistercompanyService, private router: Router, private route: ActivatedRoute, private messageService: MessageService) {
  }

  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.RegexAlphaNumeric)]),
    name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^0\d{8,9}$/)]),
    role: new FormGroup({
      id: new FormControl('',)
    })
  })

  register() {
    this.idRole= this.registerForm.value.role;
    console.log(this.idRole)
      this.registerCompanyService.register(this.registerForm.value).subscribe((data) => {
        this.account = data;
        console.log(this.account)
        alert("Đăng kí thành công. Vào Mail để xem chi tiết")
        this.router.navigate(["/login"])
      }, () => {
        alert("Email or số điện thoại đã tồn tại");
        console.log(this.registerForm.value)
      })
    }

  showError() {
    this.messageService.add({severity:'error', summary: 'Cảnh báo', detail: 'Đăng nhập thất bại', key: 'tc'});
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Thông báo', detail: 'Đăng nhập thành công', key: 'tc'});
  }
}
