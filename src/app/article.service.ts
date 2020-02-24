import { Injectable } from '@angular/core';
import { Article } from './article'; 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ARTICLES } from './mock-article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private Url = 'http://localhost:8000/articles'
  httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.Url)
  }

  getArticle(id :number): Observable<Article> {
    const url = `${this.Url}/${id}`
    return this.http.get<Article>(url);
  }

  postArticle(name :string,title :string,content :string): Observable<Article>{
    const postdata = {name, title, content};
    return this.http.post<Article>(this.Url, postdata,this.httpOptions);
  }
  
  putArticle(id: number,title :string,content :string): Observable<any>{
    const putdata = {id, title, content};
    return this.http.put(this.Url, putdata, this.httpOptions);
  }

  deleteArticle(id: number): Observable<Article>{
    const url = `${this.Url}/${id}`
    return this.http.post<Article>(this.Url, this.httpOptions);
  }
}
