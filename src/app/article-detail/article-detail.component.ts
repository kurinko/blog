import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service'; 
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
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

  goBack(){
    this.location.back();
  }

}
