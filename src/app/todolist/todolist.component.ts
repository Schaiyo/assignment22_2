import { getLocaleTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';

@Component (
  {
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
  }
)

export class toDoListComponent {
  todoList: Task[] = [];
  
  taskName: String;
  taskDescription: String;

  addTask() {
    let inputTask: Task = {
      id: this.todoList.length+1,
      name: this.taskName,
      description: this.taskDescription
    }
    this.todoList.push(inputTask);
  }

  deleteTask(TaskComponent: TaskComponent) {
    this.todoList = this.todoList.filter(t => t.id !== TaskComponent.taskList.id);
  }
}
