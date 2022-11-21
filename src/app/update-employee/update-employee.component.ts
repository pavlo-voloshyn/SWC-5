import { Router } from '@angular/router';
import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = {}
  public errorMes: string = ''

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    const updateEmployeeId = localStorage.getItem("employeeupd")
    this.employeeService.get(updateEmployeeId ?? '').subscribe(res => {
        this.employee = res as Employee;
    })

  }

  public onUpdate() {
    this.employeeService.update(this.employee)
    .subscribe(res => {
      this.router.navigate(['/employees'])
    })
  }
}
