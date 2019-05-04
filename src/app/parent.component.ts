import { Component, OnInit, ViewChild} from '@angular/core';
import { ChildComponent} from './child.component';

// Output co tham so
@Component({
    selector: 'app-parent',
    // template: `<h3> {{value}} </h3>
    // <app-child (myClick)="changeValue($event)"></app-child>
    //             `
                // truyen ten su kien myclick
    // c1 template: `<button class="btn" (click)="child.value = child.value + 1">Add for child</button>
    //             <app-child #child></app-child>`

    //c2
    template: `<button class="btn" (click)="onAddForChild()">Add for child</button>
                 <app-child ></app-child>`

})

export class ParentComponent implements OnInit {
    constructor() { }
    // value = 0;
    
    @ViewChild(ChildComponent)
    //Dung mychild truy cap vao class childcomponent
    myChild:ChildComponent;

    ngOnInit() { 
       
    }

    onAddForChild()
    {
        this.myChild.value ++;
    }
    
    // changeValue(isBoolean: boolean)
    // {
    //     if(isBoolean)
    //         this.value = this.value + 1;
    //     else
    //         this.value = this.value - 1;
    // }
}