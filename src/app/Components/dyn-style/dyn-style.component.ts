import { Component } from '@angular/core';

@Component({
  selector: 'app-dyn-style',
  imports: [],
  templateUrl: './dyn-style.component.html',
  styleUrl: './dyn-style.component.css'
})
export class DynStyleComponent {
  bgColor="purple";
  fontSize="80";
  headingSizeBig="80px"
  headingSizeSmall="30px"
  zoom = true;
  updateheadingSize(){
    this.zoom = !this.zoom;
  }
}
