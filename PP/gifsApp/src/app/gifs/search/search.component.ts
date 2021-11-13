import { Component, ElementRef, ViewChild  } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService:GifsService){}

  buscar( ){
   const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length == 0 ){return}

   this.gifsService.searchGifs (valor);
    
    this.txtBuscar.nativeElement.value = '';
    
  }

}
