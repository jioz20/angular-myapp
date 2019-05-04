import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
  {
    name: 'Ti', age: 10
  },
  {
     name: 'Teo', age: 11
  },
  {
    name: 'Bi', age: 12
  }
  ]
  constructor() { }

  ngOnInit() {
  }

  deleteUser(name: String)
  {
    const vtri = this.arrPeople.findIndex(user => user.name === name)
    return this.arrPeople.splice(vtri, 1);
  }
}
