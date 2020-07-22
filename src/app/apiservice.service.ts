import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { WeatherdataObject } from './weatherdata-object';
import { IDtokenWeatherApp } from '../../../token';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  public weatherData;
  public RootObject;
  private REST_API_SERVER = "http://77.68.25.40:443/phpfiles/dashboardGetMainData.php";
  constructor(private http: HttpClient, private IDtokenWeatherApp: IDtokenWeatherApp) { }
 
  getData(userEmail): Observable<any> { 
    // Http Headers
        const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })}
      const params = new HttpParams({
        fromString: 'email='+userEmail
      });
      var formData = new FormData();
      formData.set('email=', '');
      
        return this.http.post<any>(this.REST_API_SERVER ,
          params
          , httpOptions)
        .pipe(
          map((data) => {
            //You can perform some transformation here
            //console.log("data ", data);
          return data;
        }),
        catchError((err) => {
          console.error("error in service",err);
          throw err;
        })
      )
       
    }

    getWeatherData(): Observable<any> {
       let id = new IDtokenWeatherApp();
       
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=cork&units=metric&appid='+id.id;
     
      return this.http.get<WeatherdataObject>(url) 
      .pipe(
        map(response => {return response; })
      
      );
    }

    // post invoice files
    postInvoiceFiles(formData): Observable<any> { 
      let url= 'http://77.68.25.40:443/phpfiles/upload.php'; // point to server-side PHP script 
      // Http Headers
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })}
      return this.http.post<any>(url,
        formData
        )
      .pipe(
        map((data) => {
          //You can perform some transformation here
          //console.log("data ", data);
         return data;
       }),
       catchError((err) => {
         console.error("error in service",err);
         throw err;
       })
     )
         
      }
}