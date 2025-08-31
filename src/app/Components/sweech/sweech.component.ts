import { Component } from '@angular/core';

@Component({
  selector: 'app-sweech',
  imports: [],
  templateUrl: './sweech.component.html',
  styleUrl: './sweech.component.css'
})
export class SweechComponent {
  color = 'blue';
  handleColor(val:string){
    this.color = val;

  }
  changeColor(event:Event){
    this.color = (event.target as HTMLInputElement).value;
  }
}
