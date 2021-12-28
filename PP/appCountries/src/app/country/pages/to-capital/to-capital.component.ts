import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-to-capital',
  templateUrl: './to-capital.component.html',
  styleUrls: ['./to-capital.component.css']
})
export class ToCapitalComponent {

  termino : string = '';
  error   : boolean = false;
  capital  : Country[] = [];
  title   : string = 'Capital'

  constructor( private _countryService: PaisService) { }

  buscar(termino:string){

    this.termino = termino;
    this.error = false;

    this._countryService.searchCapital(termino)
        .subscribe(resp=>{
          console.log(resp);
          this.capital = resp;
                 
        },(err) =>{
          this.error = true;
          console.log(err);
          this.capital=[];
          
        });
    
  }

  sugerencias(termino:string){
    this.error = false;
    //TODO sugerencias
  }
}