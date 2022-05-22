import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  btnName: string = 'Submit';
  articles: Array<Article>;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 1),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('Articulo', title.value, 'Linck:', link.value);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';

    return false;
  }

  sortedArticles(): Article[] {
    //sort compara el primer elemento con el segundo para darle la posición y así sucesibamente
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
