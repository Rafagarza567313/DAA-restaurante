import { Component } from '@angular/core';
import { User } from '../_models/user.models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  user:User[]=[
    {username:"rafael.garza",name:"Rafael Garza"},
    {username:"rafael.garza",name:"Rafael Garza"},

  ];

  displayedColumns: string[]=
  ["username",
    "name",
    "actions",
  ];

  addButtonClicked(){
    alert("Boton de añadir activado")
  }

  deleteButtonClicked(){
    alert("Boton de borrado activado")
  }
}
