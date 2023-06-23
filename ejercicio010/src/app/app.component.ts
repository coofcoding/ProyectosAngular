import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  personajes: any;
  pagina: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`https://rickandmortyapi.com/api/character/?page=${this.pagina}`)
      .subscribe((resultado) => {
        this.personajes = resultado;
      });
  }

  paginaSiguiente() {
    if (this.pagina === 42) {
      alert('No hay más páginas!');
    } else {
      this.pagina++;
      this.http.get(`https://rickandmortyapi.com/api/character/?page=${this.pagina}`)
        .subscribe((resultado) => {
          this.personajes = resultado;
        });
    }
  }

  paginaAnterior() {
    if (this.pagina === 1) {
      alert('No hay más páginas anteriores!');
    } else {
      this.pagina--;
      this.http.get(`https://rickandmortyapi.com/api/character/?page=${this.pagina}`)
        .subscribe((resultado) => {
          this.personajes = resultado;
        });
    }
  }
}
