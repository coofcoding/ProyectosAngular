import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
  numero1 = 10;
  numero2 = 5;
  resultado = 0;

  suma()
  {
    this.resultado = this.numero1 + this.numero2;
    return this.resultado;
  }

  resta()
  {
    this.resultado = this.numero1 - this.numero2;
    return this.resultado;
  }

  multiplicacion()
  {
    this.resultado = this.numero1 * this.numero2;
    return this.resultado;
  }

  division()
  {
    this.resultado = this.numero1 / this.numero2;
    return this.resultado;
  }
}
