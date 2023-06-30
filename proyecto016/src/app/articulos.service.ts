import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = 'https://scratchya.com.ar/angular/proyecto916/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(articulos : any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulos));
  }

  baja(codigo : any) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }

  seleccionar(codigo : number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulos : any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulos));
  }
}
