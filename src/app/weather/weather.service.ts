import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable()

export class WeatherService {
    constructor(private http: HttpClient){}

    //Lay nhiet do
    // getTemp(cityName: string)
    // {
    //     const apiKey = '99f54b9a3f2b9a291069f02066517b1f';
    //     const url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+',uk&appid='+ apiKey+'&units=metric'
    //     return this.http.get(url)
    //     .toPromise()
    //     .then(resJs => resJs.main.temp)
    //     .catch(e => console.log(e))
    //     //resJs.main.temp
    // }
}