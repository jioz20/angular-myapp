import { Pipe, PipeTransform } from "@angular/core";

//Khởi tạo tên của pipe, cái này dùng để truyền giá trị bên html
@Pipe({name: 'roundNum'})


export class RoundPipe implements PipeTransform{
    //Tham số truyền vào
    transform(value: number, isBoolean: boolean, addNumber: number):number {
        if(isBoolean)
            return Math.ceil(value + addNumber);
        else
            return Math.floor(value + addNumber);
    }

}