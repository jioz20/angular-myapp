import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {SigninService} from './signin.service'

@Component({

    //ngForm, tu dong them ma khong can khai bao
    //?: khac null or khac undefine moi cho truy cap truc tiep vao thuoc tinh
    //[ngModel]="false": cho gia tri mac dinh 
    //pattern chua regular exception
    selector: 'app-singin',
    template: `
    <form (ngSubmit)="onSubmit(formSignIn)" #formSignIn="ngForm">
    <input type="email" placeholder="Email" ngModel  #txtEmail="ngModel" name="emailInput" required email/> <br/>
    <small *ngIf="txtEmail.errors?.required" style="color: red">Email is required</small>
    <small *ngIf="txtEmail.touched && txtEmail.errors?.email" style="color: red">Email is not valid</small>

    <br/>
    <br/>
    <input type="password" placeholder="Password" ngModel #txtPassword="ngModel" 
    name="passwordInput" minlength="6" pattern="[a-z]*" required/>
    <br/>
    <small *ngIf="txtPassword.errors?.required" style="color: red">Password is required</small>
    <br/>
    <br/>
    <label ><input type="checkbox" name="remember" ngModel>Remember me</label>
    <br/>
    <div ngModelGroup="subjects">
        <label ><input type="checkbox" name="NodeJS" [ngModel]="false" >NodeJS</label>
        <label ><input type="checkbox" name="Angular" [ngModel]="false" >Angular</label>
        <label ><input type="checkbox" name="ReactJs" [ngModel]="false" >ReactJs</label>
    </div>
    <br/>
    <button class="btn" [disabled]="formSignIn.invalid">Submit</button>
    </form>
    <br/>
    <p>{{formSignIn.value | json}}</p>
    <p>{{txtPassword.errors | json}}</p>
    `,
    providers: [SigninService]
})
// [disabled]="formSignIn.invalid"
export class SigninComponent{

    constructor(private signinService: SigninService){

    }

    onSubmit(formSignIn)
    {
       this.signinService.sendPost(formSignIn.value)
       .then(sigin => console.log(sigin))
       .catch(e => console.log(e))
    }
}