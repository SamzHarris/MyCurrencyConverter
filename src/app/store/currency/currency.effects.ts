import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CurrencyActionTypes, getCurrencyList } from './currency.actions';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyEffect {

    getCurrencyList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCurrencyList),
            switchMap(action => {
                const itemsLoaded = this.currencyService.getCurrencyList();
                return of({
                type: CurrencyActionTypes.GET_CURRENCY_LIST, items: itemsLoaded
                });
            }),
            catchError(error => of({
                type: CurrencyActionTypes.GET_CURRENCY_LIST, message: error
            }))
        )
    );

    constructor(
        private actions$: Actions,
        private currencyService: CurrencyService
      ) {}
}
