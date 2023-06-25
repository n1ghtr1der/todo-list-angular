import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../models/tasks';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  taskList: TaskList[] = [];
  task!: TaskList;

  ngOnInit(): void {

  }
}
