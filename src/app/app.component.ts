import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Currency } from './models/currency';
import { CurrencyService } from './services/currency.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import {
    calcCurrencyConversion,
    getCurrencyList,
} from './store/currency/currency.actions';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
    selectConvertedAmount,
    selectCurrencyList,
    selectFromCurrency, selectIsLoading,
    selectToCurrency,
} from './store/currency/currency.selectors';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})


@UntilDestroy()
export class AppComponent implements OnInit{
    public currencyList$ = this.store$.select(selectCurrencyList);
    public isLoading$ = this.store$.select(selectIsLoading);
    currencyForm = new FormGroup({
        toCurrencySelect: new FormControl(''),
        fromCurrencySelect: new FormControl(''),
        amountInput: new FormControl(''),
    });
    title = 'MyCurrencyConverter';
    fromCurrency: Currency;
    toCurrency: Currency;
    amount: number;
    convertedAmount: number = 0.00;

    constructor(
        private currencyService: CurrencyService,
        public store$: Store<AppState>) {
    }

    ngOnInit(): void {
        this.store$.dispatch(getCurrencyList())
        //todo join the two selectors
        this.store$.select(selectToCurrency).subscribe( (toCurrency) =>
            this.toCurrency = toCurrency
        )
        this.store$.select(selectFromCurrency).subscribe( (fromCurrency) =>
            this.fromCurrency = fromCurrency
        )
    }

    convertAmount() {
        this.store$.dispatch(calcCurrencyConversion({
            toCurrency: this.toCurrency,
            fromCurrency: this.fromCurrency,
            amount: this.amount
        }));
        this.store$.select(selectConvertedAmount).subscribe((amount) => {
            this.convertedAmount = amount;
        });
    }
}
//TODO fix indentation
//TODO Check for syntax
//TODO Update the FE to default the drop downs
//TODO test validations
//TODO add loaders
