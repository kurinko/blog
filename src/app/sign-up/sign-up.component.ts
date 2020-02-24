import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user :User
  constructor(
    private userService: UserService,
    private router :Router
  ) { }

  ngOnInit() {
  }

  register(name: string, password: string){
    this.userService.createUser(name,password)
    .subscribe(user => {this.user = user})
    window.alert("登録完了")
    this.router.navigate(['signin']);
  }

}
