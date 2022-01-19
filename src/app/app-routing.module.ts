import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes =[
    {
         path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path:'pais/:id',  //el :id es para que sea dinamico//
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: '' //esto es para que cuando el cliente entre a una ruta que no es ninguna de las de arriba lo va a mandar al home que es ''//

    },
];

@NgModule({
    
    imports: [RouterModule.forRoot( routes )],

    exports: [
        RouterModule
    ],
   
})

export class AppRoutingModule {}

