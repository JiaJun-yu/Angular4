import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //创建一个数组，放入将在页面上展示的数据
  private products:Array<Product>;
  constructor() { }

  ngOnInit() { //初始化数据，声明周期钩子函数，组件被实例化以后，被调用一次
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，an4入门时创建的",["图书"]),
      new Product(2,"第二个商品",2.99,3.5,"这是第二个商品，an4入门时创建的",["电子产品","硬件设备"]),
      new Product(3,"第三个商品",3.99,2.5,"这是第三个商品，an4入门时创建的",["硬件设备"]),
      new Product(4,"第四个商品",4.99,4.5,"这是第四个商品，an4入门时创建的",["电子产品","硬件设备"]),
      new Product(5,"第五个商品",5.99,2.5,"这是第五个商品，an4入门时创建的",["电子产品"]),
      new Product(6,"第六个商品",6.99,1.5,"这是第六个商品，an4入门时创建的",["图书"]),
    ]
  }
}

//一个对象封装产品信息

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}