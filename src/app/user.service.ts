import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, windowCount } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url = 'http://localhost:8000/user'
  users :User[];
  user:User = null;
  httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getUser(name: string):Observable<User> {
    const url = `${this.Url}/${name}`    
    return this.http.get<User>(url);
  }
  
  createUser(name :string, password: string):Observable<User>{
    const postdata = {name,password}
    return  this.http.post<User>(this.Url, postdata, this.httpOptions);
  }
  
  
  // gettableUser(name :string, password: string):Observable<User>{
  //   const url = `${this.Url}/?name=${name}&password=${password}`    
  //   return  this.http.get<User>(url);
  //   // const getdata = {name,password}
  //   //return  this.http.get<User>(this.Url,getdata,this.httpOptions);
  // }
  
  gettableUser(name :string, password: string): any{
    const url = `${this.Url}/?name=${name}&password=${password}` 
    window.alert(fetch(url).then(response=>response.json()));
    fetch(url).then(function(response) {
      return response.json();
    })
  }
  
  
  loginCheck(name: string, password: string):boolean{
    this.gettableUser(name,password).then(user => {this.user = user})
    window.alert(this.user.name)
    if (this.user!=null){
      return true;
    } else{
      return false;
    }
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

}