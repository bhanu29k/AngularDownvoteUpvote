import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

    /* title:string;
    link:string;
    votes:number;
    developer:string;
    genre:string;
    constructor(title:string,link:string,votes:number,developer:string,genre:string)
    {
        this.title=title;
        this.link=link;
        this.votes=votes;
        this.developer=developer;
        this.genre=genre;
    }
    */
    constructor(){}
  getEmployees()
  {
    return [
      {"title":"Angular2","link":"https://angular.io/","votes":0,"developer":"Google","genre":"Latest"},
      {"title":"Java","link":"https://www.w3schools.in/java-tutorial/intro/","votes":0,"developer":"James Gosling","genre":"Mediate"},
      {"title":"C++","link":"https://www.w3schools.in/cplusplus-tutorial/intro/","votes":0,"developer":"Bjarne Stroustrup","genre":"Outdated"}
    ];
  }
}
