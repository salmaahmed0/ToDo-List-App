import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  taskName: string = ''
  editedName: string='';
  editingIndex:  number | null = null;

  constructor(public tasksService: TasksService){}

  ngOnInit():void{}

  editTask(index: number, task: Task):void{
    this.editingIndex = index;
    this.editedName = task.name;
  }

  addTask():void{
    if(this.taskName){
      const task:Task = {
        name: this.taskName,
        creator: "Salma",
        date: new Date(),
        completed: false
      };
      this.tasksService.addTask(task);
      this.taskName='';
    }
  }
  deleteTask(i:number):void{
    this.tasksService.deleteTask(i);
  }
  completeTask(task:Task):void{
    this.tasksService.completeTask(task);
  }
  updateTask(task:Task):void{

    task.name = this.editedName;
    this.editingIndex = null;
    this.editedName='';
    this.tasksService.updateTask(task);
  }
}
