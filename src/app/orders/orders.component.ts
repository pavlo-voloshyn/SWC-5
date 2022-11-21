import { Router } from '@angular/router';
import { OrderService } from './../services/order.service';
import { Order } from './../models/order.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'serviceType', 'isUrgent', 'status', 'passportId', 'dateCreated', 'actions'];

  dataSource: Order[] = []
  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    let id = localStorage.getItem('selectedemployee')
    this.orderService.getAll(id ?? '')
      .subscribe(res => {
        this.dataSource = res as Order[]
      }, err => {
        console.log(err.error)
      })


  }

  public onDelete(id: number) {
    this.orderService.delete(id).subscribe(res => {
      window.location.reload();
    })
  }

  public onLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }


  public onBack() {
    this.router.navigate(['/', 'employees'])
  }

  public onCreate() {
    this.router.navigate(['/add-order'])
  }
}
