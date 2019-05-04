import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


//Su dung ngModel

import { AppComponent } from './app.component';
import { WordComponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { StructComponent } from './struct/struct.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import {CardComponent} from './card.component';
import {BitcoinComponent} from './bitcoin.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import {RoundPipe} from './round.pipe';
import { BitcoinService} from './bitcoin.service';
import { WeatherComponent } from './weather/weather.component';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    StructComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    BitcoinComponent,
    WeatherComponent,
    SigninComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule ,//Phai import vao cho nay nua ,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
