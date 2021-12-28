import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-to-country',
  templateUrl: './to-country.component.html',
  styleUrls: ['./to-country.component.css']
})
export class ToCountryComponent {

  termino : string = '';
  error   : boolean = false;
  paises  : Country[] = [];
  title   : string = 'Country'
  
  constructor( private _countryService: PaisService) { }

  buscar(termino:string){

    this.termino = termino;
    this.error = false;

    this._countryService.searchCountry(termino)
        .subscribe(resp=>{
          console.log(resp);
          this.paises = resp;
                 
        },(err) =>{
          this.error = true;
          console.log(err);
          this.paises=[];
          
        });
    
  }

  sugerencias(termino:string){
    this.error = false;
  }


}
