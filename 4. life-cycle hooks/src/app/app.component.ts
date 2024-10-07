import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostListComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-cycle-hooks';

  parentToChildMessage: string = 'message to child from base parent'


  changeParentMessage() {
    this.parentToChildMessage = 'parents message changed'
  }

// -----------------------------------
  loadComponent() {
    return PostListComponent;
  }

// -----------------------------------
  constructor (private viewContainer: ViewContainerRef) {}

  loadComponent2() {
    this.viewContainer.createComponent(PostListComponent)
  }
  removeComponent() {
    this.viewContainer.remove()
  }
}
