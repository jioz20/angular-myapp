import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({

    //Ở trên thì chữ thường
    //nếu lồng formSignup.get('subjects.email').invalid

    selector: 'app-signup',
    template: `
    <form  (ngSubmit)="onSubmit()" [formGroup]="formSignup">
    <input type="text" placeholder="Email" formControlName="email"/> <br/>
    <small *ngIf="formSignup.get('email').invalid && formSignup.get('email').touched" style="color: red">Email is required</small>
    <br/>
    <br/>
    <input type="password" placeholder="Password" formControlName="password"/><br/>
    <small *ngIf="formSignup.controls.password.invalid" style="color: red">Password is required</small>
    <br/>
    <br/>
    <div formGroupName="subjects">
        <label ><input type="checkbox" name="NodeJS"  formControlName="NodeJS">NodeJS</label>  
        <label ><input type="checkbox" name="Angular" formControlName="Angular">Angular</label>  
        <label ><input type="checkbox" name="ReactJs"  formControlName="ReactJs">ReactJs</label>  
    </div>
    <button class="btn" [disabled]="formSignup.invalid">Submit</button>
    </form>
    <br/>
    <code>{{formSignup.controls.email.errors | json}}</code>
    `,
})
export class SignupComponent implements OnInit{
    formSignup : FormGroup;
    //Xay dung form building để tránh khai báo new dài dòng
    constructor(private fb: FormBuilder){}
    ngOnInit()
    {
        //Khai báo validator cho biến
        this.formSignup =  this.fb.group({
            email:['', [Validators.email, this.gmailValidator]],
            password: ['', Validators.required],
            subjects: this.fb.group ({
                NodeJS: false,
                Angular: true,
                ReactJs: false
            })    
        })
    }



    onSubmit()
    {
        console.log(this.formSignup.value);
    }
    
    gmailValidator(FormControl: FormControl)
    {
        //Kiem tra neu trong chuỗi mà có chuỗi @gmail.com thì trả về không có lỗi
        if(FormControl.value.includes('@gmail.com'))
            return null;
        return {gmail: true};
    }
}