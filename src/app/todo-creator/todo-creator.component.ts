import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {
  todoText: string;
  @Output() todoAdded: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addTodo() {
    this.todoAdded.emit(this.todoText);
    this.todoText = '';
  }

}
