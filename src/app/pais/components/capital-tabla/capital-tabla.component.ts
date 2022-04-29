import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styles: [],
})
export class CapitalTablaComponent {
  @Input() country: Country[] = [];
}
