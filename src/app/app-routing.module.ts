import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent},
  { path: 'articles/:id', component: ArticleDetailComponent},
  { path: 'articles/edit/:id', component: ArticleEditComponent},
  // { path: '', component: ArticlesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
