import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  // template: `<button (click)="deleteUser()">Delete</button>`,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name: string; //Input này là được lấy từ html của file gốc person.component
  @Input() age: number;

  @Output() myClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  removeUser()
  {
    this.myClick.emit(this.name);
  }

}
