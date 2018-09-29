import { Component, OnInit,HostBinding,Input } from '@angular/core';
import {Article} from 'D:/Angular5/Project/Product/src/app/article';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article1:Article;
  constructor() { }

  ngOnInit() {
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
