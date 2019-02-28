import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = this.getFromStorage();
    if (!this.todos) {
      this.todos = [];
    }
  }

  onTodoAdded(todoText: string) {
    // Add todo
    const newTodo: Todo = { id: Math.random() * 10000, text: todoText, done: false };
    this.todos.push(newTodo);
    this.saveToStorage();
  }

  onTodoUpdated(todo: Todo) {
    // Update todo
    this.todos = this.todos.map(x => {
      if (x.id === todo.id) {
        return todo;
      } else {
        return x;
      }
    });
    this.saveToStorage();
  }

  onTodoDeleted(id: number) {
    this.todos = this.todos.filter(x => x.id !== id);
    this.saveToStorage();
  }

  private saveToStorage() {
    localStorage.setItem('todoer-Todos', JSON.stringify(this.todos));
    console.log('Saved to storage.', this.todos);
  }

  private getFromStorage(): Todo[] {
    const loadedTodos = JSON.parse(localStorage.getItem('todoer-Todos'));
    console.log('Read from storage.', loadedTodos);
    return loadedTodos;
  }
}
