import { Component } from '@angular/core';
import{ Todo} from './models/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  list = [
    {
      index:'1',
      title:'Todo App'
    },
    { 
      index: '2',
      title: 'Todo App 2'
    },
    {
      index: '3',
      title: 'Todo App 3'
    }
  ];
  addNewCard(){
    this.list.push({
      index: this.list.length + 1 + '',
      title: 'Todo App ' + this.list.length + 2
    });
  }

  
}
