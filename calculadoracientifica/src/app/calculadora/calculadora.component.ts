import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {  
  cadenaOperacion: string='';
  estado: boolean=false;
  resultado: any;
  Ans: number=0;
  arrCadena: string[] = [];
  pi: number = 3.1416;

  ngOnInit() 
  {
    this.resultado = 'Off';
    alert("Si ingresa una operación muy larga, puede ver toda la operación dando click en el campo de texto y dejando presionada la flecha del teclado en la dirección a la que quiera ir.")
  }

  powerOn()
  {
    this.estado = true;
    this.resultado = '0';
  }
  
  powerOff()
  {
    this.estado = false;
    this.resultado = 'Off';
    this.cadenaOperacion = '';
  }

  addDato(v: string)
  {
    if (this.estado)
    {
      if (v === 'parentesisIzq')
      {
        this.cadenaOperacion = this.cadenaOperacion + '(';
      }
      else if (v === 'parentesisDer')
      {
        this.cadenaOperacion = this.cadenaOperacion + ')';
      }
      else if (v === 'pi')
      {
        this.cadenaOperacion = this.cadenaOperacion + this.pi;
      }
      else if (v === 'e')
      {
        this.cadenaOperacion = this.cadenaOperacion + '2.71828';
      }
      else
      {
        this.cadenaOperacion = this.cadenaOperacion + v;
      }
    }
  }

  funcAc()
  {
      this.cadenaOperacion = '';
  }

  ansFunc()
  {
    if (this.estado)
    {
      this.cadenaOperacion = this.cadenaOperacion + this.Ans;
    }
  }

  deleteChar()
  {
    let copia = this.cadenaOperacion;
    this.cadenaOperacion = '';
    for(let i of copia) {
      this.arrCadena.push(i);
    }
    for (let j = 0; j < this.arrCadena.length-1; j++)
    {
      this.cadenaOperacion = this.cadenaOperacion + this.arrCadena[j];
    }
    this.arrCadena = [];
  }

  equals()
  {
    if (this.estado)
    {
      this.resultado = eval(this.cadenaOperacion);
      this.Ans = +this.resultado;
    }
  }
}
