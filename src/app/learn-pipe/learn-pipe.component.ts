import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  days = new Date();
  person = {name: "Tri", age: 21.6}
  constructor() { }
 
  ngOnInit() {
  }

}