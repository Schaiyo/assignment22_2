import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  taskList: Task;

  @Output()
  deleteTask: EventEmitter<TaskComponent> = new EventEmitter();

  @Output()
  taskClick: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteTask.emit(this);
  }

  taskSelected() {
    this.taskClick.emit(this);
  }

}
