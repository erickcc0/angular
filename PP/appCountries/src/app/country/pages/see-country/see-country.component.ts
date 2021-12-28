import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {


  params!: Country
  termino: string = 'SV';

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService,
  ) { }


  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        //Recibe un observable(params) y retorna otro observable(nuestro servicio)
        switchMap(({ id }) => this.paisService.searchCountryById(id)),
        //Forma rapida de hacer un console log
        tap(console.log)
        )
      .subscribe(resp => { this.params = resp[0] },
        err => {
          alert(err);
        }
      );

    // this.activateRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);
    //     this.paisService.searchCountryById(id)
    //       .subscribe(resp => {
    //         console.log(resp);
    //       },
    //         err => {
    //           console.log(err);

    //         });
    //   },
    //     err => {
    //       console.log(err);

    //     });

  }

}
