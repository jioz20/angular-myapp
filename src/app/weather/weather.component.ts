import { Component, OnInit } from '@angular/core';
// import {WeatherService} from './weather.service'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  // providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  txtCityName: string;
  cityName : string = "";
  temp : null;
  isLoadding = false;
  // constructor(private weather: WeatherService ) { }

  ngOnInit() :void{
  }

  // getWeather()
  // {
  //   this.isLoadding = true;
  //   this.weather.getTemp(this.txtCityName)
  //   .then(temp => {
  //     this.cityName = this.txtCityName;
  //     this.temp = temp;
  //     this.isLoadding = false;
  //   })
  //   .catch(e => {
  //     alert('Canot find city');
  //     this.isLoadding = false; 
  //   })
  // }

  getMessage()
  {
    if(this.isLoadding)
      return 'Loading...'
    return this.cityName === "" ? "Enter your city name" : (this.cityName + ' is now ' + this.temp);
  }

}
