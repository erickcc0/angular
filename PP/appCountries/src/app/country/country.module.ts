import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToCapitalComponent } from './pages/to-capital/to-capital.component';
import { ToCountryComponent } from './pages/to-country/to-country.component';
import { ToRegionComponent } from './pages/to-region/to-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { Router, RouterModule } from '@angular/router';
import { TableCountryComponent } from './components/table-country/table-country.component';
import { InputCountryComponent } from './components/input-country/input-country.component';



@NgModule({
  declarations: [
    ToCapitalComponent,
    ToCountryComponent,
    ToRegionComponent,
    SeeCountryComponent,
    TableCountryComponent,
    InputCountryComponent
  ],
  exports:[
    ToCapitalComponent,
    ToCountryComponent,
    ToRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
