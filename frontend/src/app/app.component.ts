import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = true
  isRegisterIn: boolean = true
  token = localStorage.getItem('aut')

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.getIsLoggedIn()
    this.isRegisterIn = this.loginService.getIsRegisterIn()
  }

  logoutJwt(){
    this.loginService.logout(this.token?.replace(/['"]+/g, '')).subscribe((response) =>{
      if (response) {
        console.log("Succesfully")
      }
    })
    localStorage.clear()
    this.router.navigate(['']);
  }

  login(){
    this.router.navigate(['login'])
  }

  register(){
    this.router.navigate(['register'])
  }

}
