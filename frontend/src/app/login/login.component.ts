import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    password : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }
  Login() {
    console.log(this.login.value);
  }


}
