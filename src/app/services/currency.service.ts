import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {}

  getCurrencyList() {
    const headers = new HttpHeaders({'Content-Type' : 'application/json', 'apiKey': environment.fixerApiKey});
    const options = {headers};
    const url = environment.fixerUrl + "/symbols"
    return this.http.get<Response>(url, options).pipe(
        map((response: Response) => response),
        catchError(err => {
          console.log(err);
          return of([]);
        })
    );
  }

  convertCurrency(fromCurrency: string, toCurrency: string, amount: number) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json', 'apiKey': environment.fixerApiKey});
    const options = {headers};
    const url = `${environment.fixerUrl}/convert?base=${fromCurrency}&symbols=${toCurrency}&amount=${amount.toString()}`;
    return this.http.get<Response>(url, options).pipe(
      map((response: Response) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }
}
