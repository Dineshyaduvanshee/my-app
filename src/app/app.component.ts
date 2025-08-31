import { Component } from '@angular/core';
import { TestComponent } from './Components/test/test.component';
import { SweechComponent } from './Components/sweech/sweech.component';
import { FoorComponent } from "./Components/foor/foor.component";
import { SinglsComponent } from "./Components/singls/singls.component";
import { EffectsComponent } from "./Components/effects/effects.component";
import { TWBindingComponent } from "./Components/twbinding/twbinding.component";
import { FormsModule } from '@angular/forms';
import { TodoComponent } from "./Components/todo/todo.component";
import { DynStyleComponent } from "./Components/dyn-style/dyn-style.component";
@Component({
  selector: 'app-root',
  standalone: true,                 // Required if using `imports` in component
  imports: [FormsModule, TestComponent, SweechComponent, FoorComponent, SinglsComponent, EffectsComponent, TWBindingComponent, TodoComponent, DynStyleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected (should be plural `styleUrls`)
})
export class AppComponent {
  title = 'my-app';
  display = true;
  x = 3;
  toggleDiv = false;

  hide() {
    this.display = false;
  }

  show() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }

  toggleTwo() {
    this.toggleDiv = !this.toggleDiv;
  }
}
