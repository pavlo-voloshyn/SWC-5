import { Employee } from './../models/employee.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  urlBase = "https:/localhost:7170/api/employee"

  constructor(private http:HttpClient) { }

  public getAll() {
    return this.http.get(this.urlBase)
  }

  public delete(id: number) {
    return this.http.delete(`${this.urlBase}?id=${id}`)
  }

  public create(employee: Employee) {
    return this.http.post(this.urlBase, employee)
  }

  public addOrder(orderId: string, employeeId: string) {
    return this.http.put(`${this.urlBase}/add-order/?orderId=${orderId}&employeeId=${employeeId}`, null)
  }

  public update(employee: Employee) {
    return this.http.put(this.urlBase, employee);
  }

  public get(id: string) {
    return this.http.get(this.urlBase + '/' + id)
  }
}
