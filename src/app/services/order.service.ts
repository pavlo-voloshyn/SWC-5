import { Order } from './../models/order.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  urlBase = "https:/localhost:7170/api/order"

  constructor(private http: HttpClient) { }

  public getAll(id: string) {
    return this.http.get(this.urlBase + '/employee/' + id);
  }

  public delete(id: number) {
    return this.http.delete(`${this.urlBase}?id=${id}`)
  }

  public create(order: Order) {
    return this.http.post(this.urlBase, order)
  }

}
