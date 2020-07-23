import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../../apiservice.service';
import { WeatherdataObject } from '../../../weatherdata-object';
@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent implements OnInit {
  public weatherData;
  public description;
  public products;
  public RootObject;
  public temp;
  public windSpeed;
  public windDegrees;
  public region;
  public sunset;
  public sunrise;
  public weatherdata:WeatherdataObject  =  <WeatherdataObject>{};
  public todayDate;

  constructor(public apiService: ApiserviceService){};

  ngOnInit(): void {
    this.getWeatherData()
  }

  getWeatherData(){
    
  
    this.apiService.getWeatherData().subscribe((data: {}) => {
      this.RootObject = data;
     this.description = this.RootObject.weather[0].description;
     this.temp = this.RootObject.main.temp;
     this.windSpeed = this.RootObject.wind.speed;
     this.windDegrees = this.RootObject.wind.deg;
     this.region = this.RootObject.sys.country;
		this.sunrise = getTime(this.RootObject.sys.sunrise);
		this.sunset = getTime(this.RootObject.sys.sunset);
        
    function getTime(unix_timestamp){
          var date = new Date(unix_timestamp *1000);
          // Hours part from the timestamp
          var hours = date.getHours();
          // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes();
          // Seconds part from the timestamp
          var seconds = "0" + date.getSeconds();
          
          // Will display time in 10:30:23 format
          var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        
          return date.getHours()+":"+date.getMinutes();
      }
     });

     var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      this.todayDate = mm + '/' + dd + '/' + yyyy;

  }

}


export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface RootObject {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}