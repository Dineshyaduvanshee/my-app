import { Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent  },
  {path:'login',component:LoginComponent},
   {path:'contact',component:ContactComponent},
   {path:'**',component:PageNotFoundComponent}
];
