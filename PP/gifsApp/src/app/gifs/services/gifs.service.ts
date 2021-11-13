import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url:string = 'https://api.giphy.com/v1/gifs';
  private api_key: string = 'n7hEPEVgiS7mF9PDfnJjF6RrmXeavCN0';
  private _historial: string[] = [];

  //Cambiar any por su tipo
  public results: Gif[] = [];

  get historial() {
    return [...this._historial];
  }
  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if(localStorage.getItem('historial')){
    //   this._historial=JSON.parse(localStorage.getItem('historial')!);
    // }

  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();


    //UNSHIFT Agrega un elemento al comienzo del array

    //Solo se agregara si no existe (include)
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      //Splice es para cortar el arreglo 
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
                  .set('api_key',this.api_key)
                  .set('limit','10')
                  .set('q',query);

    console.log(this._historial);

    this.http.get<SearchGIFResponse>(`${this.url}/search`, {params} )
      .subscribe((resp) => {
        console.log(resp.data);
        this.results = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.results));
      });

  }

}
