import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  //传入星级评价的数据需要一个装饰器@Input
  @Input()
  //声明一个属性,用来接收星级评价的数值，默认是0。
  private rating: number = 0;
  //需要五个星星，数据驱动页面，在此处生成五个星星
  private stars: boolean[];

  
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i=1; i<=5; i++){
      
      this.stars.push(i>this.rating);
    }
    
  }

}
