import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
    task="";
    taskList:{id:number,task:string}[]=[];

    addTask(){
      this.taskList.push({id:this.taskList.length+1,task:this.task});
      this.task="";
      console.log(this.taskList);
    }
    deleteTask(taskId:number){
     this.taskList=this.taskList.filter((item)=>item.id!==taskId);
    }
}
