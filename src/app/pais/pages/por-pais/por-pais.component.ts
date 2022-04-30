import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  error: boolean = false;
  paisesSugeridos: Country[] = [];
  country: Country[] = [];

  search(termino: string) {
    console.log(termino);
  }
  buscar(termino: string) {
    this.error = false;

    this.paisService.buscarData(termino).subscribe({
      next: (paises) => {
        this.country = paises;
        this.paisesSugeridos = [];
      },
      error: () => {
        this.error = true;
        this.country = [];
      },
      complete: () => (this.error = false),
    });
    console.log(this.country);
  }

  sugerencias(termino: string) {
    console.log(this.paisesSugeridos);

    this.termino = termino;
    this.paisService.buscarData(termino).subscribe({
      next: (paises) => {
        this.paisesSugeridos = paises.splice(0, 5);
        console.log(this.paisesSugeridos);
      },
      error: () => {
        this.error = true;
        this.paisesSugeridos = [];
      },
      complete: () => (this.error = false),
    });
  }

  constructor(private paisService: PaisService) {}
}
