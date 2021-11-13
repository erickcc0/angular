import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {

 @Input() nuevo:Personaje = {
    nombre: '',
    poder:0
  }

  constructor(private dbzService:DbzService){}


  agregar(){
    if(this.nuevo.nombre.trim().length == 0){ return;}
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder:0
    }

  }

}
