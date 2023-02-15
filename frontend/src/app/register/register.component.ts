import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  create = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }
  createuser() {
    console.log(this.create.value);
  }

}
