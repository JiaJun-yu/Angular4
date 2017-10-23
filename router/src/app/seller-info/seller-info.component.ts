import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {
  private sellerId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params['id'];
  }

}
