import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Task } from '../modules/home/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiBaseUrl);
  };

  public newTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiBaseUrl, task);
  };

  public deleteTask(taskName: String): Observable<Task> {
    return this.http.delete<Task>(`${this.apiBaseUrl}/${taskName}`);
  };

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiBaseUrl, task);
  };

  public deleteAllTasks(): Observable<Task[]> {
    return this.http.delete<Task[]>(this.apiBaseUrl);
  };
}
