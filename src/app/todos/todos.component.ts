import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ApiService } from '../services/api.service';
import { User } from '../interfaces/users.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: any[] = [];
  completed: boolean = false;

  constructor(private todosService: TodosService,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

}
