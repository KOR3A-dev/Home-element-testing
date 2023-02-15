import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

interface responseToken {
  token?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  login = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  submit() {
    if (this.login.valid) {
      this.loginService.login(this.login.value).subscribe((response:responseToken) =>{
       if (response) {
        this.loginService.setIsLoggedIn(true)
        localStorage.setItem('aut',JSON.stringify(response.token))
        this.router.navigate(['/'])
       }
      })
    }
  }

}
