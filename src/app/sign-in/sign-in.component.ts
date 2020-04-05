import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: User;
  loginForm;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBulider: FormBuilder,
  ) { 
    this.loginForm = this.formBulider.group({
      name:'',
      password:''
    });
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }
  onSubmit(){
    this.login(this.f.name.value,this.f.password.value)
  }
  login(name: string, password: string){
   if (this.userService.loginCheck(name,password)){
    localStorage.setItem('token','login')
    window.alert("ログイン成功")
    this.router.navigate(['articles'])
   }else{
     window.alert("ログインに失敗しました。名前かパスワードが間違っています")
   }
  }
}
