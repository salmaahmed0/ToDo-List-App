import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  tasks: Task[] = []
  deletedTasks: Task[] = []
  completedTasks: Task[]= []

  constructor() { }

  addTask(task:Task):void{
    this.tasks.push(task);
  }
  deleteTask(i : number):void{
    const task:Task = this.tasks.at(i)!;
    this.deletedTasks.push(task);
    this.tasks.splice(i, 1);
  }
  completeTask(task:Task):void{
    this.completedTasks.push(task);
    task.completed = !task.completed;
  }
  updateTask(updateTask: Task):void{
    const idx: number = this.tasks.findIndex(task => task === updateTask);
    if(idx !== -1){
      this.tasks[idx] = updateTask;
    }
  }

}
