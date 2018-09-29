import { Component } from '@angular/core';
import {Article} from 'D:/Angular5/Project/Product/src/app/article';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  article:Article[];
  constructor() 
  { 
    this.article=
    [
    new Article('Angular2','https://angular.io/',0,'Google','Latest'),
    new Article('Java','https://www.w3schools.in/java-tutorial/intro/',0,'James Gosling','Mediate'),
    new Article('C++','https://www.w3schools.in/cplusplus-tutorial/intro/',0,'Bjarne Stroustrup','Outdated'),
    ];
  }

  validateTopic(value) {
    if (value === 'default' || value==null) {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  ClickFunc(title,link,developer,genre):boolean
{
  
 // alert(link.value);
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
}

