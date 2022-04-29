import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [],
})
export class PaisTablaComponent {
  @Input() country: Country[] = [];
}