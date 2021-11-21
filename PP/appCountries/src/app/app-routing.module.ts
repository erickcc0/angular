import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ToCountryComponent } from './country/pages/to-country/to-country.component';
import { ToRegionComponent } from './country/pages/to-region/to-region.component';
import { ToCapitalComponent } from './country/pages/to-capital/to-capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

const routes: Routes = [
    {
        path: '',
        component: ToCountryComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component: ToRegionComponent
    },
    {
        path:'capital',
        component: ToCapitalComponent
    },
    {
        path:'pais/:id',
        component: SeeCountryComponent
    },
    {
        path:'**',
        redirectTo: ''
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutingModule {

}