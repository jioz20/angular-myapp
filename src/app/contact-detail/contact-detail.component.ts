import { Component, OnInit } from '@angular/core';
//Lay id tu router
import {ActivatedRoute, ParamMap} from '@angular/router'
@Component({
  selector: 'app-contact-detail',
  template: '<p>{{name}} - {{phoneNumber}}</p>',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  name ="";
  phoneNumber="";
  constructor(private route : ActivatedRoute) { 

  }

  ngOnInit() {
    //lay id
    this.route.paramMap.subscribe((params: ParamMap)=>{
      const id = params.get('id');
      this.name = params.get('name');
      this.phoneNumber = params.get('phoneNumber');
        //Goi api tu Server de tra ve contact co id
    })
  }

}
