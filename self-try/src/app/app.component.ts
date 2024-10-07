import { Component, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from './component1/component1.component';
import { Component2 } from './component2/component2.component';
import { Component3 } from './component3/component3.component';
import { FormsModule } from '@angular/forms'
import { NgIf, NgFor,NgSwitch, NgSwitchCase, NgTemplateOutlet, NgComponentOutlet, NgSwitchDefault, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component1, Component2, Component3, FormsModule, NgClass, NgStyle, NgComponentOutlet, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  b: boolean = true;
  usersArray: Array<any> = [
    {id:1, name: 'user1', mail: 'u1@mail' },
    {id:2, name: 'user2', mail: 'u2@mail' },
    {id:3, name: 'user3', mail: 'u3@mail' },
  ]

  msgToC1: string = 'msg from bp to c1';

  @ViewChild(Component1) msgFromC1ToBp: any
  msgFromC1: string = '';

  constructor () {
    console.log(this.msgFromC1ToBp)
  }

  ngAfterViewInit(): void {
    console.log(this.msgFromC1ToBp)
    this.msgFromC1 = this.msgFromC1ToBp.msgToBp
  }
}
