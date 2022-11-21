import { EmployeeService } from './../services/employee.service';
import { Order } from './../models/order.interface';
import { OrderService } from './../services/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  public errorMes: string = ''
  order: Order = {}

  constructor(private router: Router,
    private orderService: OrderService,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }


  public onCreate() {
    this.orderService.create(this.order)
    .subscribe(res => {
      this.employeeService.addOrder(res.toString(), localStorage.getItem("selectedemployee") ?? "")
      .subscribe (res => {
        this.router.navigate(['/orders'])
      }, err => {
        console.log(err.error)
      })

    }, err => {
      console.log(err.error)
    })
  }


}
