import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle, NgClass, CommonModule } from '@angular/common'; // commonModule for parent-child data transfer
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from './card/card.component'
import { Card2Component } from './card2/card2.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgStyle, NgClass, PostsListComponent, CardComponent, Card2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Attribute-Directives';
  isLogged: boolean = true
  // -----------------------------
  // messaging to child
  postTitle: string = 'Parent data (parent component)'
  // -----------------------------
  // mesage from child
  messageFromChild: string = ''

  @ViewChild(PostsListComponent) recievedChildMessage: any

  constructor() {
    console.log(this.recievedChildMessage)
    // will show undefined cause the child element isn't loaded
  }
  // LIFECYCLE HOOK:
  ngAfterViewInit(): void {
    // all variables of child can now be accessed by parent in object format
    console.log(this.recievedChildMessage)
    this.messageFromChild = this.recievedChildMessage.childMessage 
  } // MUST MENTION RETURN TYPE
  //----------------------------------
  messageFromChild2: string = ''

  recievedChildMessage2(message: string) {
    console.log(message)
    this.messageFromChild2 = message
  }
}
