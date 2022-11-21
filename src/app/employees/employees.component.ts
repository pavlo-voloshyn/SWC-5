import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'surname', 'role', 'office', 'actions'];

  dataSource: Employee[] = []

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
      this.employeeService.getAll().subscribe(res => {
        this.dataSource = res as Employee[]
      }, err => {
          console.log(err.error)
      })
  }

  public onDelete(id: number) {
    this.employeeService.delete(id).subscribe(res => {
      window.location.reload();
    })
  }

  public onOrders(id: number) {
    localStorage.setItem("selectedemployee", id.toString());
    this.router.navigate(['/', 'orders'])
  }

  public onUpdate(id: number) {
    localStorage.setItem("employeeupd", id.toString())
    this.router.navigate(['/update-employee'])
  }

  public onLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }


  public onCreate() {
    this.router.navigate(['/add-employee'])
  }

}
