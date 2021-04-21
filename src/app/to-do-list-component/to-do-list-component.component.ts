import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {
  @Input()
  task:Task;

  @Output()
  OnClick: EventEmitter<ToDoListComponentComponent> = new EventEmitter();
  @Output()
  OnRemove: EventEmitter<Task> = new EventEmitter();

  isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  remove(){
    this.OnRemove.emit(this.task);
  }
  doSomething(){
    this.OnClick.emit(this);
  }

}
