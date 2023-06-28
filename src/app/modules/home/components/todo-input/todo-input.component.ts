import { Task } from '../../models/tasks';
import { TaskServiceService } from './../../../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit{
  tasks: Task[] = [];
  task!: Task;
  taskName!: string;

  constructor(private taskService: TaskServiceService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks
      }
    })
  }

  public deleteAllTasks(): void {
    let confirm = window.confirm('Delete all tasks?');
    if(confirm) {
      this.taskService.getTasks().subscribe({
        next: () => {
          console.log('ok')
        }
      })
      const deleteTasks = this.tasks.map((task => task.id));
      for(let taskId of deleteTasks) {
        this.taskService.deleteTask(taskId).subscribe({
          next: () => {
            window.location.reload();
          }
        })
      }
    }
  };

  public createTask(taskName: string): void {
    this.task = {
      taskName: taskName,
      done: false,
      id: uuid(),
    }
    this.taskService.newTask(this.task).subscribe({
      next: () => {
        window.location.reload();
      }
    });
  }
}
