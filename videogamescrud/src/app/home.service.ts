import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'http://localhost/Api_Angular/';

  constructor(private http: HttpClient) { }

  getUser(user:string) {
    return this.http.get(`${this.url}api.php?username=${user}`);  
  }
}
