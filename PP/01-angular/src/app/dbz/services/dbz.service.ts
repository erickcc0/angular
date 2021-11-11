import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";


@Injectable()
export class DbzService{

    personajes: Personaje[] = [
        {   
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 12000 
        }
      ]; 

    constructor(){
        console.log("Servicio inicializado");
    }


}