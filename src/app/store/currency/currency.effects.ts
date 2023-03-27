import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Currency } from '../../models/currency';
import { AppState } from '../app.state';
import {
    CurrencyActionTypes,
    getCurrencyList,
    getCurrencyListFailure,
    getCurrencyListSuccess,
} from './currency.actions';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyEffect {

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private currencyService: CurrencyService
    ) {}

    getCurrencyList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCurrencyList),
            switchMap(() =>
                from(this.currencyService.getCurrencyList()).pipe(
                    map((currencyList) => getCurrencyListSuccess({currencyList: currencyList})),
                    catchError((error) => of(getCurrencyListFailure(error)))
                )
            )
        ),
    { dispatch: true }
    );
}
