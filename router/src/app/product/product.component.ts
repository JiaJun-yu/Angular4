import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //声明一个number类型的属性，来接收路由中的商品id:
  private productId: number;
  //在构造函数中注入，从而得到ActivatedRoute
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.params.subscribe((params:Params) => this.productId = params["id"]);
    //subscribe订阅，订阅之后生成匿名的函数，来处理订阅传递进来的参数，从参数中取出id赋值给本地的product；
    // this.productId = this.routeInfo.snapshot.params["id"];
  }

}
