import { Component, ViewChild } from '@angular/core';
import '../../assets/css/styles.css';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'add-user',
  templateUrl: './app.addUser.html'
})

export class AddUser {
  departments: Array<string> = [];
  @ViewChild("userForm") userForm: NgForm;

  user: any = {
    'name': '',
    'email': '',
    'dept': 'output'
  }

  constructor(){
    this.departments = ['output', 'LGNA'];
  }

  diagnostic() {
    return JSON.stringify(this.user);
  }

  onSubmit(){
    if(this.userForm.valid){
      localStorage.setItem('1', JSON.stringify(this.user));
    }
  }

}
