import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormsModule, NgModel } from'@angular/forms';
import { Task } from '../task';
import { ToDoListComponentComponent } from '../to-do-list-component/to-do-list-component.component';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {

  @ViewChildren(ToDoListComponentComponent)
  taskList:QueryList<ToDoListComponentComponent>

  tasks:Task[];
  tasksAdon:Task[];

  @Input()
  name:string;
  description:string;

  constructor() { 
    this.tasks =[];
    this.tasksAdon =[];
    this.tasks.push({
      id:'1',
      name:'Task 1',
      description:'This is task.'
    })
    this.tasks.push({
      id:'2',
      name:'Task 1',
      description:'This is task.'
    })
  }

  ngOnInit(): void {
  }

  clickTask(taskComponent:ToDoListComponentComponent){
    this.tasksAdon=this.tasks.filter(item => item == taskComponent.task)
    this.taskList.forEach(p => {
      if(taskComponent.task==p.task){
        p.isSelected =true;
      }else p.isSelected =false;
    })
    
  }

  add(name:string,description:string){
    this.tasks.push({
      id:String(this.tasks.length+1),
      name:name,
      description:description
    })   
  }
  removeTask(task:Task){
    this.tasks=this.tasks.filter(item => item != task)
  }


}
