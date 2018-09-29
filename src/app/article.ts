export class Article {
    title:string;
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
}