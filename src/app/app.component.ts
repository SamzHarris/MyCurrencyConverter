import { Component } from '@angular/core';
import { Currency } from './models/currency';
import { CurrencyService } from './services/currency.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'MyCurrencyConverter';
  fromCurrencyCode: string;
  toCurrencyCode: string;
  amount: number;
  convertedAmount: number;
  currencyList: Array<Currency> = [];

  constructor(private currencyService: CurrencyService, public store$: Store,) {
    this.currencyService.getCurrencyList().subscribe(
      (res) => {
        let currencyList: any = res;
        Object.entries(currencyList.symbols).forEach(([key, value]) => {
          let currencyObj = new Currency();
          currencyObj.code = key;
          currencyObj.name = <string>value;
          this.currencyList.push(currencyObj)
        });
      }
    );
    //TODO Select default currencies
  }

  convertAmount() {
    this.currencyService.convertCurrency(this.toCurrencyCode, this.fromCurrencyCode, this.amount).subscribe(
      (res) => {
        let currencyList: any = res;
        Object.entries(currencyList.symbols).forEach(([key, value]) => {
          let currencyObj = new Currency();
          currencyObj.code = key;
          currencyObj.name = <string>value;
          this.currencyList.push(currencyObj)
        });
      }
    );
    this.convertedAmount = this.amount;
  }
}
