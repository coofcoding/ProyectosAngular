import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
})
export class RelojComponent implements OnInit {
  hora = 0;
  minuto = 0;
  segundo = 0;
  @Input() inicioSegundo: number = 0;
  @Input() inicioMinuto: number = 0;
  @Input() inicioHora: number = 0;

  constructor() {}

  ngOnInit() {
    this.segundo = this.inicioSegundo;
    this.minuto = this.inicioMinuto;
    this.hora = this.inicioHora;
    setInterval(() => {
      this.segundo++;
      if (this.segundo == 60) {
        this.segundo = 0;
        this.minuto++;
      }

      if (this.minuto == 60) {
        this.minuto = 0;
        this.hora++;
      }

      if (this.hora == 24) {
        this.hora = 0;
      }
      //this.horaFinal.emit(this.segundo);
    }, 1000);

  }
}
