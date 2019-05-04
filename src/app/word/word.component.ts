import { Component } from '@angular/core';

@Component({
    templateUrl:'./word.component.html' ,
    selector: 'app-word',
    styleUrls: ['./word.component.css']
})

export class WordComponent{
    en = 'Hello';
    vn = 'Xin chao';
    images = "https://angular.io/assets/images/logos/angular/angular.svg";
    forgot = true;
    name = '';
    isHighlight = true;
    eventStyle = {color: 'red', fontSize: '20px'}
    oddStyle = {color: 'blue', fontSize: '30px'}
    shapeStyle= {circle: !this.isHighlight, square: this.isHighlight}
    clickForgotButton()
    {
        this.forgot = !this.forgot;
    }

    showEvent(event)
    {
        this.name = event.target.value;  
    }

}