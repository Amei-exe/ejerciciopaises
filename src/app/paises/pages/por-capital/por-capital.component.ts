import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises:  Country [] = [];

  
  
  constructor( private paisService: PaisService) { }
  
  buscar( termino : string ){
    this.hayError = false;
    this.termino = termino;
    

    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
        if (paises.length == undefined) {
          this.hayError = true;
        }
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }


    
    }