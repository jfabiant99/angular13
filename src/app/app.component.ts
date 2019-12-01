import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  angForm: FormGroup;
  title = 'angular13';

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  ngOnInit(){
  }
  
  createForm(){
    this.angForm = this.fb.group({
      email:[''],
      password:['']
    });

  }

  onClickSubmit(email, pwd){
    console.log("Email: ", email);
    console.log("Password: ", pwd);
    alert('Your Email is ' + email);
  }

}
