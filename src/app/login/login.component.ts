import { FormsModule } from '@angular/forms';
import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = ''
  public password: string = ''
  public errorMes: string = ''

  constructor(private authService: AuthService,
  private tokenService: TokenService,
  private router: Router) { }

  ngOnInit(): void {
    const token = this.tokenService.getToken()
    if (token !== null || token !== "") {
      this.router.navigate(['/', 'employees'])
    }
  }

  public onLogin(): void {
    this.errorMes = ''
    this.authService.login(this.username, this.password)
    .subscribe(res => {
      console.log(res['token']);
      this.tokenService.setToken(res['token']);
      this.router.navigate(['/', 'employees'])
    },
      err => {
        const error = err as HttpErrorResponse;
        this.errorMes = error.error
        console.log(error.error)
      })
  }
}
