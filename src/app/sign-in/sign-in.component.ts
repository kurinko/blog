import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: User


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  login(name: string, password: string){

   if (this.userService.loginCheck(name,password)){
    localStorage.setItem('token','login')
    this.router.navigate(['articles'])
   }else{
     window.alert("ログインに失敗しました。名前かパスワードが間違っています")
   }
  }
}
