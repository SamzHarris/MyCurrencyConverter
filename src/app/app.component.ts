import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CurrencyService } from './services/currency.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getCurrencyList } from './store/currency/currency.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { selectCurrencyList } from './store/currency/currency.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


@UntilDestroy()
export class AppComponent {
    public currencyList$ = this.store$.select(selectCurrencyList);
  title = 'MyCurrencyConverter';
  fromCurrencyCode: string;
  toCurrencyCode: string;
  amount: number;
  convertedAmount: number;
  currencyList: Array<Currency> = [];
    //TODO call currency list from local storage if blank only then make the service call - use the selector
     //use *NgFor="let item of items | async"

  constructor(
    private currencyService: CurrencyService,
    public store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store$.dispatch(getCurrencyList())
  }

  convertAmount() {
    this.currencyService.convertCurrency(this.toCurrencyCode, this.fromCurrencyCode, this.amount).subscribe(
      (res) => {

      }
    );
    this.convertedAmount = this.amount;
  }
}

//TODO Select default currencies
