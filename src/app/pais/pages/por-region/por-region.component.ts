import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  termino: string = '';
  error: boolean = false;
  regions: Array<string> = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  regionActive: string = '';
  country: Country[] = [];
  buscar(termino: string) {
    this.error = false;
    this.regionActive = termino;
    this.paisService.buscarData(termino, 'region').subscribe(
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

  getClass(region: string) {
    return `btn  text-white rounded-0 mb-4 ${
      region === this.regionActive ? 'bg-primary' : 'bg-secondary'
    }`;
  }
  // sugerencias(termino: string) {
  //   this.termino = termino;
  //   this.paisService.buscarData(termino, 'region').subscribe({
  //     next: (paises) => (this.country = paises),
  //     error: () => {
  //       this.error = true;
  //       this.country = [];
  //     },
  //     complete: () => (this.error = false),
  //   });
  //   console.log(this.termino);
  // }

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
}
