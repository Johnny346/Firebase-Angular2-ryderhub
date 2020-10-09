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
  private REST_API_SERVER = "https://myryderhub.co.uk/phpfiles/dashboardGetMainData.php";
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

    getUpdatedData(userEmail,finishDate,startDate): Observable<any> {
      let url= 'https://myryderhub.co.uk/phpfiles/dashboardGetUpdatedMainData.php';
      var endDate = finishDate.getFullYear() + "-" + (finishDate.getMonth()+1)
        + "-" + finishDate.getDate();
      startDate = startDate.getFullYear() + "-" + (startDate.getMonth()+1)
      + "-" + startDate.getDate();
      console.log("userchart startdate " +startDate);
      console.log("userchart finishdate " +endDate);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })}
      const params = new HttpParams({
        fromString: 'email='+userEmail+'&endDate='+endDate+'&startDate='+startDate
      });
      return this.http.post<any>(url,
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
       
      let url = 'https://api.openweathermap.org/data/2.5/weather?q=cork&units=metric&appid='+id.id;
     
      return this.http.get<WeatherdataObject>(url) 
      .pipe(
        map(response => {return response; })
      
      );
    }

    // post invoice files
    postInvoiceFiles(formData): Observable<any> { 

      if(formData == null){
        console.log("no files");
        return;
      }
      let url= 'https://myryderhub.co.uk/phpfiles/upload.php'; // point to server-side PHP script 
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

      registerUser(registerUser): Observable<any> {
        let url = 'https://myryderhub.co.uk/phpfiles/serverRegisterUser.php';
        let name = registerUser.firstname + " " + registerUser.lastname;
      

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          })}
          
        const params = new HttpParams({
          fromString: 'ryderid='+registerUser.ryderid
        +'&email='+ registerUser.email
        +'&name='+ name
        +'&city='+ registerUser.city
        +'&password='+ registerUser.password
        });
      
          return this.http.post<any>(url,
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
   
}
