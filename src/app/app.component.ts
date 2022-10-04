import {Component, inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <p *ngIf="$todo | async as todo">
          {{todo.title}}
          <mark>{{todo.completed}}</mark>
      </p>
      <a routerLink="/hello">Hello component</a>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Hello world!'
  $todo!: Observable<Todo>;

  private http = inject(HttpClient);

  ngOnInit() {
    this.$todo = this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/1`);
  }
}