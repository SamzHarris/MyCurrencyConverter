import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CurrencyState } from './currency.reducer';

export const selectCurrency = (state: AppState) => state.currency;
export const selectCurrencyList = createSelector(
    selectCurrency,
    (state: CurrencyState) => state.currencyList
)

export const selectToCurrency = createSelector(
    selectCurrency,
    (state: CurrencyState) => state.toCurrency
)
export const selectFromCurrency = createSelector(
    selectCurrency,
    (state: CurrencyState) => state.fromCurrency
)

export const selectConvertedAmount = createSelector(
    selectCurrency,
    (state: CurrencyState) => state.convertedAmount
)

export const selectIsLoading = createSelector(
    selectCurrency,
    (state: CurrencyState) => state.isLoading
)
