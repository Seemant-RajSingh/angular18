import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../card/card.component'

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  @Input() passedPostTitle: string = ''
  childMessage: string = 'hi from child component'
  // ----------------------------------
  childMessage2: string = 'hi again from child'

  @Output() MessageEvent = new EventEmitter()

  sendToParent() {
    console.log('button clicked')
    this.MessageEvent.emit(this.childMessage2)
  }
}
