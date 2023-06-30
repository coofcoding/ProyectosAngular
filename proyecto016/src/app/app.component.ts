import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articulos: any;

  art = {
    codigo:0,
    descripcion:"",
    precio:0
  }

  constructor(private articuloServicio: ArticulosService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articuloServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }

  alta() {
    this.articuloServicio.alta(this.art).subscribe((datos:any) => {
      if(datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo : number) {
    this.articuloServicio.baja(codigo).subscribe((datos : any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    })
  }

  modificacion() {
    this.articuloServicio.modificacion(this.art).subscribe((datos : any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    })
  }

  seleccionar(codigo : number) {
    this.articuloServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  }
}
