import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlBase = "https:/localhost:7170/api/user"

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    let params = new HttpParams();
    console.log(username)
    console.log(password)
    params.set("username", username);
    params.set("password", password);

    return this.http.get(`${this.urlBase}?username=${username}&password=${password}`)
  }

}
