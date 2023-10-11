import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, order } from '../data-type';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderData:order[]|undefined;
  cartData:cart[]|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.orderList().subscribe((result)=>{
      this.orderData=result

    })
  }

}
