import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchCountry(termino:string):Observable<Country[]>{

    const url= `${this.apiUrl}/name/${termino}`;
   return this.http.get<Country[]>(url);
            // .pipe(
            //   catchError(err => of(['Hiciste algo mal we']))
            // );

  }

  searchCapital(termino:string):Observable<Country[]>{

    const url= `${this.apiUrl}/capital/${termino}`;
   return this.http.get<Country[]>(url);
            // .pipe(
            //   catchError(err => of(['Hiciste algo mal we']))
            // );

  }

  searchCountryById(id:string):Observable<Country>{

    const url= `${this.apiUrl}/alpha/${id}`;
   return this.http.get<Country>(url);
            // .pipe(
            //   catchError(err => of(['Hiciste algo mal we']))
            // );

  }

  
}
