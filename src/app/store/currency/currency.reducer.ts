import { createReducer, on, MetaReducer } from '@ngrx/store';
import { Currency } from '../../models/currency';
import {
    getCurrencyList,
    getCurrencyListSuccess,
    getCurrencyListFailure,
    saveToCurrency,
    saveFromCurrency,
} from './currency.actions';

export interface CurrencyState {
  fromCurrency: Currency;
  toCurrency: Currency;
  isLoading: boolean;
  currencyList: Array<Currency>
  amount: number;
  convertedAmount: number;
  error: string | null;
}

export const initialState: CurrencyState = {
  fromCurrency: {
    code : 'ZAR',
    name : 'South African Rands'
  },
  toCurrency: {
    code : 'GBP',
    name : 'Great British Pounds'
  },
  isLoading: true,
  currencyList: [],
  amount: 0,
  convertedAmount: 0,
  error: null,
};

export const CurrencyReducer = createReducer(
  initialState,
  on(getCurrencyList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrencyListSuccess, (state, { currencyList }) => ({
    ...state,
    error: null,
    currencyList: currencyList,
    isLoading: false,
  })),
  on(getCurrencyListFailure, (state, { error }) => ({
    ...state,
    error: error,
    isLoading: false,
  })),
    on(saveToCurrency, (state, { code, name }) => ({
        ...state,
        toCurrency: { code: code, name: name },
        isLoading: true,
    })),
    on(saveFromCurrency, (state, { code, name }) => ({
        ...state,
        fromCurrency: { code: code, name: name },
        isLoading: true,
    })),
);

