import { Component } from '@angular/core';
import '../../assets/css/styles.css';

@Component({
  selector: 'add-user',
  templateUrl: './app.addUser.html'
})

export class AddUser {
  departments: Array<string> = [];
  user: any = {
    'name': '',
    'email': ''
  }

  diagnostic() {
    return JSON.stringify(this.user);
  }

  constructor(){
    this.departments = ['output', 'LGNA'];
  }
}
