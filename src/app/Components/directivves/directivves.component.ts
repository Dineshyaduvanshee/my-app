import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-directivves',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directivves.component.html',
  styleUrls: ['./directivves.component.css']
})
export class DirectivvesComponent {
  show = true;
  login = false;
  block = 0;
  color = '';
  students = ['Dinesh', 'Sam', 'Peter', 'Bruce'];

  StudentsData = [
    { id: 1, name: "Dinesh Kumar", course: "MCA", dob: "1998-01-15" },
    { id: 2, name: "Amit Singh", course: "BCA", dob: "2000-05-20" },
    { id: 3, name: "Riya Sharma", course: "MCA", dob: "1999-08-10" },
    { id: 4, name: "Sneha Verma", course: "BCA", dob: "2001-03-12" },
    { id: 5, name: "Rajesh Gupta", course: "MCA", dob: "1997-11-25" }
  ];

  updateBlock() {
    this.block++;
  }
  changeColor(color: string) {
    this.color = color;
  }
}
