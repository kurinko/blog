import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  // { path: 'articles', component: ArticlesComponent,canActivate:[AuthGuard]},
  // { path: 'articles/:id', component: ArticleDetailComponent,canActivate:[AuthGuard]},
  // { path: 'articles/edit/:id', component: ArticleEditComponent,canActivate:[AuthGuard]},
  { path: 'articles', component: ArticlesComponent},
  { path: 'articles/:id', component: ArticleDetailComponent},
  { path: 'articles/edit/:id', component: ArticleEditComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'signin', component: SignInComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
