import { getLocaleTimeFormat } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
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
  @ViewChildren(TaskComponent) taskView: QueryList<TaskComponent>;

  todoList: Task[] = [];
  
  taskName: String;
  taskDescription: String;

  viewDetail: Task;

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

  selectedTask(taskComponent: TaskComponent) {
    this.clearSelected();
    taskComponent.isSelected = true;
    this.viewDetail = taskComponent.taskList;
  }
  
  clearSelected() {
    this.taskView.forEach(
      task => {
        task.isSelected = false;
      }
    )    
  }
}
