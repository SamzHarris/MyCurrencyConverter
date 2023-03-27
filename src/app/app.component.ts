import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CurrencyService } from './services/currency.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getCurrencyList, saveFromCurrency } from './store/currency/currency.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { selectCurrencyList, selectFromCurrency, selectToCurrency } from './store/currency/currency.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


@UntilDestroy()
export class AppComponent {
    public currencyList$ = this.store$.select(selectCurrencyList);
  title = 'MyCurrencyConverter';
  fromCurrency: Currency;
  toCurrency: Currency;
  amount: number;
  convertedAmount: number;

  constructor(
    private currencyService: CurrencyService,
    public store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store$.dispatch(getCurrencyList())
      this.store$.select(selectToCurrency).subscribe( (toCurrency) =>
          this.toCurrency = toCurrency
      )
      this.store$.select(selectFromCurrency).subscribe( (fromCurrency) =>
          this.fromCurrency = fromCurrency
      )
  }

  convertAmount() {
      this.store$.dispatch(saveFromCurrency(this.fromCurrency))
      //dispatch to update the states with to and from currency
      //want to call the dispatch
    // this.currencyService.convertCurrency(this.toCurrencyCode, this.fromCurrencyCode, this.amount).subscribe(
    //   (res) => {
    //
    //   }
    // );
    this.convertedAmount = this.amount;
  }
}

//TODO Select default currencies
