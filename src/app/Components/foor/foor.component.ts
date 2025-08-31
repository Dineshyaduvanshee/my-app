import { Component } from '@angular/core';

@Component({
  selector: 'app-foor',
  imports: [],
  templateUrl: './foor.component.html',
  styleUrl: './foor.component.css'
})
export class FoorComponent {
  users = ["Dinesh","Pihu","mitu","Raju","Sonu","Anil","Sidhu","Sam","Peter","Bruce","Smith","Bhasker","Praveen","Vinay","Tonny"];

  students = [
    {
      name: "Dinesh",
      age: 24,
      email:"dineshyadav74950@gmail.com"
    },
    {
      name: "Pihu",
      age: 22,
      email:"pihu123@gmil.com"
    },
    {
      name: "Mitu",
      age: 23,
      email:"mittu123@gmail.com"
    },
    {
      name: "Raju",
      age: 25,
      email:"raju123@gmail.com"
    }
  ]

  getName(name:string){
    console.log(name);
  }
}
