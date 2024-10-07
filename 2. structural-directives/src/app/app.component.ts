import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor,NgSwitch, NgTemplateOutlet, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app-2';

  //_________________________________________________
  userRole: string = 'Admin'
  //_________________________________________________
  usrname: string = 'Orang logged'
  isLogged: boolean = false
  loginBtnText: string = 'Login'
  count = 0

  handleLogin() {
    this.isLogged = !this.isLogged
    if(this.isLogged) this.loginBtnText = 'Logout'
    else this.loginBtnText = 'Login'
  }
  incCount() {
    this.count ++
    console.log(this.count)
  }
  // toggle() {this.isLogged = !this.isLogged}
  //___________________________________________________
  // any to avoid from typescript error, typically interfaces used for ts
  usersArray: Array<any> = [
    {id:1, name: 'user1', mail: 'u1@mail' },
    {id:2, name: 'user2', mail: 'u2@mail' },
    {id:3, name: 'user3', mail: 'u3@mail' },
  ]

  newName: string = ''
  newMail: string = ''

  addUser() {
    console.log('User added:', this.newName, this.newMail);
    if (this.newName && this.newMail) {
      const newUser = {
        id: this.usersArray.length + 1,
        name: this.newName, // directly from form ip
        mail: this.newMail
      };
      this.usersArray.push(newUser);
      this.newName = '';
      this.newMail = '';
    }
  }

  onDelete(user: object, i: number) {
    // let index = this.usersArray.indexOf(user)
    this.usersArray.splice(i,1)
  }

  // constructor always runs on page load
  constructor() {
    console.log("wtf")
  }

}
