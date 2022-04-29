import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `
      h1 {
        /* display: inline;
        margin-right: 1em; */
      }
    `,
  ],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarData(id, 'alpha')),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais[0]));

    // peticion larga
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.paisService.buscarData(id, 'alpha').subscribe((pais) => {
    //     // this.pais = pais;
    //     console.log(pais);
    //   });
    // });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}
}
