import { Component, OnInit,HostBinding,Input } from '@angular/core';
import {Article} from 'D:/Angular5/Project/Product/src/app/article';
import { ArticleService } from '../Article.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article1:Article;
  public Article1=[];

  constructor(private _articleService:ArticleService) { }

  ngOnInit() {
    this.Article1=this._articleService.getEmployees();
  }
  UpVote()
  {
    this.article1.votes +=1;
  }
  DownVote()
  {
    this.article1.votes-=1;
  }
}
