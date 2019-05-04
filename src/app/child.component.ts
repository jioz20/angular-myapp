import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-child',
    // template: `<button class="btn" type="button" (click)="addParent()">Add</button> &nbsp; 
    //             <button class="btn" type="button" (click)="subParent()">Sub</button>`

    template: `<h3>{{ value }}</h3>`
})

export class ChildComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    //Lay ra gia tri cua myclick
    // @Output() myClick = new EventEmitter<boolean>();

    // addParent()
    // {
    //     //Phat sinh event do va thuc hien
    //     this.myClick.emit(true);
    // }
    // subParent()
    // {
    //     this.myClick.emit(false);
    // }


    value = 0;

}