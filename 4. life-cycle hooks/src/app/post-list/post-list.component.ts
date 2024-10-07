import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnChanges {

  @Input() parentMessage: string = ''
  // @Input parentMessage alteration triggers ngOnChanges or any Inputr value, not change in var of component
  ngOnChanges() {
    console.log('onChanges triggered - perform desired actions')
  }
}
