import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ContactsModule} from './contacts/contacts.module';

const routesConfig: Routes = [
    {path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent},
    {path: '', redirectTo: '/contacts', pathMatch: 'full'},//hien thi gia tri mac dinh khi vao web  
    {path: '**', component: PageNotFoundComponent}//hien thi gia tri page not found khi nguoi dung truy cap khong dung
  ]

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
    imports: [
        ContactsModule,
        CommonModule,
        RouterModule.forRoot(routesConfig)
        
    ],
    declarations: [
        ContactDetailComponent, 
        PageNotFoundComponent
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }