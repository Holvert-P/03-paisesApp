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

  country: Country[] = [];
  buscar(termino: string) {
    this.error = false;

    this.paisService.buscarPaises(termino).subscribe(
      (paises) => {
        this.country = paises;
        console.log(paises);
      },
      (err) => {
        console.log(err);
        this.error = true;
        this.country = [];
      }
    );
    console.log(this.termino);
  }

  sugerencias(termino: string) {
    this.termino = termino;
    this.paisService.buscarPaises(termino).subscribe({
      next: (paises) => (this.country = paises),
      error: () => {
        this.error = true;
        this.country = [];
      },
      complete: () => (this.error = false),
    });
    console.log(this.termino);
  }

  constructor(private paisService: PaisService) {}
}
