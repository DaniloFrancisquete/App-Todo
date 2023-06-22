import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 
  public tasKList:Array<TaskList>=[

  ];
  constructor() {}

  ngOnInit(): void {
      
  }
  public deleteItemTaskList(event:number){
    this.tasKList.splice(event,1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente Deletar tudo?");
   
    if(confirm){
      this.tasKList =[];
    }
  }

}
