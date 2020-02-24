import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service'; 
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  article: Article

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
    .subscribe(article => this.article = article)
  }
  
  save(title :string,content :string){
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.putArticle(id,title,content)
    .subscribe(() => this.goBack())
    this.goBack()
  }
  
  delete(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.deleteArticle(id)
    .subscribe(() => this.goBack())
    this.goBack()
  }


  goBack(){
    this.location.back();
  }
}
