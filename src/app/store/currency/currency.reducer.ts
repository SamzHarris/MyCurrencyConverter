import { createReducer, on, MetaReducer } from '@ngrx/store';
import { Currency } from '../../models/currency';
import {
    getCurrencyList,
    getCurrencyListSuccess,
    getCurrencyListFailure,
    calcCurrencyConversion, calcCurrencyConversionSuccess, calcCurrencyConversionFailure,
} from './currency.actions';

export interface CurrencyState {
    fromCurrency: Currency;
    toCurrency: Currency;
    isLoading: boolean;
    currencyList: Array<Currency>
    amount: number;
    convertedAmount?: number;
    error: string | null;
}

export const initialState: CurrencyState = {
    fromCurrency: {
        code : '',
        name : ''
    },
    toCurrency: {
        code : '',
        name : ''
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
    on(getCurrencyListFailure, calcCurrencyConversionFailure, (state, { error }) => ({
        ...state,
        error: error,
        isLoading: true,
    })),
    on(calcCurrencyConversion, (state, { fromCurrency, toCurrency, amount }) => ({
        ...state,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
        amount: amount,
        isLoading: true,
    })),
    on(calcCurrencyConversionSuccess, (state, { convertedAmount }) => ({
        ...state,
        error: null,
        convertedAmount: convertedAmount,
        isLoading: false,
    })),
);

