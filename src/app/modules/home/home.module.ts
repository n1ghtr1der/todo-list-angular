import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    TodoListComponent,
    TodoInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class HomeModule { }
