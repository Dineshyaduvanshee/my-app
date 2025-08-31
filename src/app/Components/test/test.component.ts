import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  color = 3
  handleColor(val:number){
    this.color = val
  }
  handleInput(event:Event){
    console.log(event)
    console.log((event.target as HTMLInputElement).value)
    this.color = parseInt((event.target as HTMLInputElement).value)
  }
}
