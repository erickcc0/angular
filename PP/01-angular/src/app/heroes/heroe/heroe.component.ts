import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'IronMan';
    edad  : number = 45;

    public get NombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre():string{
        return this.nombre + ' tiene ' + this.edad.toString() + ' años';
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 30 ;
    }


}