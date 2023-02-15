import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

interface responseToken {
  token?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  formRegister = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  ngOnInit(): void {}

  submit() {
    if (this.formRegister.valid) {
      this.loginService.register(this.formRegister.value).subscribe((response:responseToken) =>{
        if (response) {
          this.loginService.setIsRegisterIn(true)
          localStorage.setItem('aut',JSON.stringify(response.token))
          this.router.navigate(['/'])
        }
      })
    }
  }

}
