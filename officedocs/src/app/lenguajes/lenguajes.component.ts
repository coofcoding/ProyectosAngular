import { Component } from '@angular/core';
import { LenguajesService } from '../lenguajes.service';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent {
  lenguajes: any;

  constructor(private lenguajesService: LenguajesService) {}

  ngOnInit() {
    this.lenguajes = this.lenguajesService.obtenerLenguajes();
    console.log(this.lenguajes[0].lenguajes_de_programacion);
  }
}
