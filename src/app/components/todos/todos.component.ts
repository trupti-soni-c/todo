import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos:Todo[];
  //Todo=new Todo();
  inputTodo:string='';
  dataarray=[];
  
  constructor() {
    this.todos = [];
    console.log('constructor :: todosComponent');
   }

  ngOnInit(): void {
    this.todos=[{
      content:'first todo',
      completed:false
    },
    {
      content:'second todo',
      completed:false
    }];
    console.log('ngOnInit :: todosComponent', this.todos);
  }
  toggleDone(id:number)
  {
    this.todos.map((v,i)=>{
      if(i==id)
      v.completed=!v.completed;
      return v;
    })
  }
  toggleDonecheck(id:number)
  {
    this.todos.map((v,i)=>{
      if(i==id)
      v.completed=!v.completed;
    
      if(v.completed==true)
      {
        console.log(v);
        let s=v;
        console.log("s",s);
      }
      return v;
      
    })
  }
   addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  


  // addTodolist () {
  //   this.todos.push({
  //     content: this.inputTodo,
  //     completed: false
  //   });
                                                                                                                                                                                    
    
  // }
}
