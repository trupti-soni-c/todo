import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  selector: 'app-multiplecard',
  templateUrl: './multiplecard.component.html',
  styleUrls: ['./multiplecard.component.css']
})
export class MultiplecardComponent implements OnInit {

  public lists:Todo[];
  contentTodo:string='';
  
  constructor() {
    this.lists = [];
    console.log('constructor :: todosComponent');
   }

  ngOnInit(): void {
    this.lists=[{
      content:'first todo',
      completed:false
    },
    {
      content:'second todo',
      completed:false
    }];
    console.log('ngOnInit :: todosComponent', this.lists);
  }
  toggleDone(id:number)
  {
    this.lists.map((v,i)=>{
      if(i==id)
      v.completed=!v.completed;
      return v;
    })
  }
  toggleDonecheck(id:number)
  {
    this.lists.map((v,i)=>{
      if(i==id)
      v.completed=!v.completed;
      return v;
    })
  }
  submitTodo () {
    this.lists.push({
      content: this.contentTodo,
      completed: false
    });

    this.contentTodo = "";
  }
  deleteTodo(id:number)
  {
      this.lists=this.lists.filter((v,i)=>i!==id)
  }
  
}
