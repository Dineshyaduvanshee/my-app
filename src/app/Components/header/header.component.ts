import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Importing child components
import { TestComponent } from "../test/test.component";
import { SweechComponent } from "../sweech/sweech.component";
import { FoorComponent } from "../foor/foor.component";
import { SinglsComponent } from "../singls/singls.component";
import { EffectsComponent } from "../effects/effects.component";
import { TWBindingComponent } from "../twbinding/twbinding.component";
import { TodoComponent } from "../todo/todo.component";
import { DynStyleComponent } from "../dyn-style/dyn-style.component";
import { DirectivvesComponent } from "../directivves/directivves.component";
import { RowtingComponent } from "../rowting/rowting.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    TestComponent,
    SweechComponent,
    FoorComponent,
    SinglsComponent,
    EffectsComponent,
    TWBindingComponent,
    TodoComponent,
    DynStyleComponent,
    DirectivvesComponent,
    RowtingComponent,
    // AboutComponent,
    // LoginComponent,
    // ContactComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  display = true;
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
