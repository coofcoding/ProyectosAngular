import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost/Api_Angular/';

  constructor(private http : HttpClient) { }

  createUser(newUser:any) {
    return this.http.post(`${this.url}api.php`, JSON.stringify(newUser));
  }
}
