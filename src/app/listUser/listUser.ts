import { Component } from '@angular/core';
import '../../assets/css/styles.css';

@Component({
  selector: 'list-user',
  templateUrl: './listUser.html'
})

export class ListUser {
  user: any = {}

  constructor(){
    this.user = JSON.parse(localStorage.getItem('1'));
    console.log(this.user);
  }

  diagnostic() {
    return JSON.stringify(this.user);
  }
}
