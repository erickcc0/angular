import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.css']
})
export class TableCountryComponent implements OnInit {


  @Input() paises: Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
