import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoSrevicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string = 'ingresoOperacion';
  descripcionInput: string;
  valorInput: number;

  constructor(private ingresoServicio:IngresoServicio,
              private egresoServicio:EgresoSrevicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion")
        this.ingresoServicio.ingreso.push
        (new Ingreso(this.descripcionInput, this.valorInput));
    else
    this.egresoServicio.egreso.push(new Egreso(this.descripcionInput, this.valorInput))
  }

}
