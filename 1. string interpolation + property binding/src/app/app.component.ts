import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { AppSearchbox } from './searchbox/searchbox.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, AppSearchbox, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // all logic of the component inside this class not outside
  // title = 'first-angular-app';
  title: string = 'Dynamic title here'
  imgURL: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQoHjidc7mp7IHce3tmGkpKPG2MaA4d_Umg&s'
  isActive: boolean = true
  
  btnClick = () => {console.log("ape")}

  keyPress(txt: HTMLInputElement) {console.log(txt.value)}


  defaultUser: string = 'John Doe'
  currentUser: string = 'John Snow'

  changeName(user: HTMLInputElement) {
    this.defaultUser = user.value 
    console.log(user.value, this.defaultUser)
    // defaultUser updated
  }
  checkName(currentUser: string) {
    console.log(currentUser)
    // currentUser updated

  }

  /* keyPress($event: any) {
    this.username = $event
    console.log($event.key)
  } */
}
