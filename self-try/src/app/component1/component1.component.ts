import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Component2 } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [Component2],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1 {
@Input() passedMsgToC1: string = ''

msgToBp: string = "hi from c1 to bp"
}
