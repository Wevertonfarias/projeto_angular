import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }
  API_KEY = " 15a64d5f418c4275b2c9ad2d6cb57067"
  apiLink = "GET https://newsapi.org/v2/top-headlines?country=br&apiKey=API_KEY"

  getLista(){
    return this.http.get(this.apiLink)
  }

}
