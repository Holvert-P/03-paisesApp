import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/country.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  buscarData(
    termino: string,
    endpoint: string = 'name'
  ): Observable<Country[]> {
    const url = `${this.apiUrl}/${endpoint}/${termino}`;
    if (endpoint === 'alpha') return this.http.get<Country[]>(url);

    const httpParams = new HttpParams().set(
      'fields',
      'name,capital,region,population,flags,cca2,translations,flag'
    );

    return this.http.get<Country[]>(url, { params: httpParams });
  }
  constructor(private http: HttpClient) {}
}
