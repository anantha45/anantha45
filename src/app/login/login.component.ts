import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup ;
msg : string = "";
  constructor(private fb : FormBuilder,private route : Router) {
    if(localStorage.getItem("isLoggedIn") == "true"){
      this.route.navigate(['/users'])
    }
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      "username" : new FormControl('',Validators.required),
      "password" : new FormControl('',Validators.required)
    })
  }
  Login(){
    if(this.loginForm.valid){
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      if(username =="admin" && password == "123456"){
        localStorage.setItem("isLoggedIn", "true");
        this.route.navigate(['/users']);
      }else{
        this.msg = "Not valid credentials"
      }
    }else{
      this.msg = "Please fill required fields"
    }
   
  }

}
