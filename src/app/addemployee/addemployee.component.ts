import { Router } from '@angular/router';
import { EmployeeService } from './../services/employee.service';
import { Employee } from './../models/employee.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  employee: Employee = {}
  public errorMes: string = ''

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onCreate() {
    this.employeeService.create(this.employee)
    .subscribe(res => {
      this.router.navigate(['/employees'])
    })
  }
}
