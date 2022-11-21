import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AuthGuard } from './guards/auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
  { path: 'add-employee', component: AddemployeeComponent, canActivate: [AuthGuard] },
  { path: 'add-order', component: AddOrderComponent, canActivate: [AuthGuard] },
  { path: 'update-employee', component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
