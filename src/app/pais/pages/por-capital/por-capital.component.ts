import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  error: boolean = false;

  country: Country[] = [];
  buscar(termino: string) {
    this.error = false;

    this.paisService.buscarData(termino).subscribe(
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
    this.paisService.buscarData(termino, 'capital').subscribe({
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
  ngOnInit(): void {}
}
