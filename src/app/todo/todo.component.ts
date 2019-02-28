import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoUpdated: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() todoDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  todoChecked() {
    this.todo.done = !this.todo.done;
    this.todoUpdated.emit(this.todo);
  }

  deleteTodo() {
    this.todoDeleted.emit(this.todo.id);
  }
}
