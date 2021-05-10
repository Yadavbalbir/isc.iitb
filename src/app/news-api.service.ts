import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apikey ='efd547e2475a47c3af006fdf9310118e';

  constructor(private http:HttpClient) { }
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.apikey);
  }
  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.apikey);
  }
  getArticlesByID(source:String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.apikey);
  }
}
