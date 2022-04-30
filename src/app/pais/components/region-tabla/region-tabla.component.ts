import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styles: [],
})
export class RegionTablaComponent implements OnInit {
  @Input() country: Country[] = [];
  constructor() {}

  ngOnInit(): void {}
}
