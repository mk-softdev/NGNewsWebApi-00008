import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

 
  constructor(private _http:HttpClient) { }

  //topnews url
  _url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3db9b3bbd6d345868c0f9512603840ad";


  //topHeading()

  topHeading():Observable<any>{
    return this._http.get(this._url);
  }

  //technewsurl
  _technewsurl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3db9b3bbd6d345868c0f9512603840ad";


  //techNews()
  techNews():Observable<any>{
    return this._http.get(this._technewsurl);
  }

}
