import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

 
  private REST_API_SERVER = "http://77.68.25.40:443/phpfiles/dashboardGetMainData.php";
  constructor(private http: HttpClient) { }
 
  getData(): Observable<any> { 
    // Http Headers
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })}
  const params = new HttpParams({
    fromString: 'email=johnmulcahy346@gmail.com'
  });
  var formData = new FormData();
  formData.set('email=', 'johnmulcahy346@gmail.com');
    //console.log("push button");
    let _urlParams = new URLSearchParams();
    _urlParams.append('email=', 'johnmulcahy346@gmail.com');
    
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
}
