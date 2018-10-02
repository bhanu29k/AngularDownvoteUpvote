import { Component } from '@angular/core';
import {Article} from 'D:/Angular5/Project/Product/src/app/article';
import { ArticleService } from './Article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  //public Article1=[];
  article:Article[];
  constructor(private _articleService:ArticleService) 
  { 
    /*this.article=
    [
    new Article('Angular2','https://angular.io/',0,'Google','Latest'),
    new Article('Java','https://www.w3schools.in/java-tutorial/intro/',0,'James Gosling','Mediate'),
    new Article('C++','https://www.w3schools.in/cplusplus-tutorial/intro/',0,'Bjarne Stroustrup','Outdated'),
    ];*/
  }
  ngOnInit()
  {
    this.article=this._articleService.getEmployees();
  }

  validateTopic(value) {
    
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  ClickFunc(title,link,developer,genre):boolean
{
  
 //alert(title.value);
  this.article.push(new Article(title.value, link.value, 0,developer.value,genre.value)); 
    
  title.value = ''; 
  link.value = ''; 
  developer.value='';
  genre.value='';
  return false;
}
onClick()
{

}
sortArticles():Article[]
{
  return this.article.sort((art1:Article,art2:Article)=>art2.votes-art1.votes)
}
}

