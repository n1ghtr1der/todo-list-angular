import { TaskServiceService } from './../../../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  taskList: Task[] = [];
  task!: Task;


  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.getTasks();
    console.log(this.taskList);
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.taskList = tasks;
      }
    })
  }
}
