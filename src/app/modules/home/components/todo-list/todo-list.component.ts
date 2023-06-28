import { TaskServiceService } from './../../../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  taskList: Task[] = [];
  task!: Task;


  constructor(private taskService: TaskServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.taskList = tasks;
      }
    })
  };

  public changeStatus(task: Task): void {
    setTimeout(() => this.taskService.updateTask(task).subscribe({
      next: () => {}
    }), 5);
  };

  public deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe({
      next: () => {
        window.location.reload();
      }
    });
  };
}
