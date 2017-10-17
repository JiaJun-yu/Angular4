import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //router对象的构造函数
  constructor(private router: Router){

  }
  toProductDetails(){
    //路由对象，从上面它的构造函数中来,通过navigate方法调转
    this.router.navigate(['/product',2]);
  }
}
