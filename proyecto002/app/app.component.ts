import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto002';

  validar = false;

  art = {
    codigo : 0,
    descripcion:'',
    precio:0
  }

  articulos = [
    {codigo:1, descripcion:'papas', precio:10.55},
    {codigo:2, descripcion:'manzana', precio:12.10},
    {codigo:3, descripcion:'melon', precio:52.30},
    {codigo:4, descripcion:'cebollas', precio:17},
    {codigo:5, descripcion:'calabaza', precio:20},
  ];

  agregar()
  {
    this.validar = this.articulos.some(item => item.codigo === this.art.codigo);
    if (this.validar === false)
    {
      this.articulos.push({codigo: this.art.codigo, descripcion: this.art.descripcion, precio: this.art.precio});
    }
    else if (this.validar === true)
    {
      alert("Ya existe un articulo identificado con este codigo por favor intentelo nuevamente.");
    }
  }

  modificar()
  {
    for (let y = 0; y < this.articulos.length; y++)
    {
      if (this.art.codigo === this.articulos[y].codigo)
      {
        this.articulos[y].codigo = this.art.codigo;
        this.articulos[y].descripcion = this.art.descripcion;
        this.articulos[y].precio = this.art.precio;
      }
    }
  }

  borrar(identificador: any)
  {
    const id = this.articulos.indexOf(identificador);
    if (id != -1)
    {
      this.articulos.splice(id, 1);
    }
  }

  seleccionar(identificador: any)
  {
    this.art.codigo = identificador.codigo;
    this.art.descripcion = identificador.descripcion;
    this.art.precio = identificador.precio;
  }
}
