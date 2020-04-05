import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles :Article[];
  constructor(private articleService :ArticleService) { }

  ngOnInit() {
    this.getArticles()
  }

  getArticles(){
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles)
  }

  add(name :string,title :string,content :string){
    this.articleService.postArticle(name,title,content)
      .subscribe(article => {this.articles.push(article)}) 
    this.getArticles()
  }

}
