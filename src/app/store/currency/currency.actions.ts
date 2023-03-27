import { createAction, props } from '@ngrx/store';
import { Currency } from '../../models/currency';

export enum CurrencyActionTypes {
    GET_CURRENCY_LIST_REQUEST = '[currency] get currency list request',
    GET_CURRENCY_LIST_SUCCESS = '[currency] get currency list success',
    GET_CURRENCY_LIST_FAILURE = '[currency] get currency list failure',
    SAVE_TO_CURRENCY = '[currency] save to currency',
    SAVE_FROM_CURRENCY = '[currency] save from currency',

    CALCULATE_CURRENCY_CONVERSION = '[currency] calculate currency conversion',
    CALCULATE_CURRENCY_CONVERSION_SUCCESS = '[currency] calculate currency conversion success',
    CALCULATE_CURRENCY_CONVERSION_FAILURE = '[currency] calculate currency conversion failure',
}

export const calcCurrencyConversion = createAction(
    CurrencyActionTypes.GET_CURRENCY_LIST_REQUEST,
);

export const calcCurrencyConversionSuccess = createAction(
  CurrencyActionTypes.GET_CURRENCY_LIST_SUCCESS,
  props< { currencyList: Array<Currency> }>()
);

export const calcCurrencyConversionFailure = createAction(
  CurrencyActionTypes.GET_CURRENCY_LIST_FAILURE,
  props<{ error: string; }>(),
);

export const saveToCurrency = createAction(
    CurrencyActionTypes.SAVE_TO_CURRENCY,
    props<{ code: string; name: string; }>(),
)

export const saveFromCurrency = createAction(
    CurrencyActionTypes.SAVE_FROM_CURRENCY,
    props<{ code: string; name: string; }>(),
)

export const getCurrencyList = createAction(
    CurrencyActionTypes.GET_CURRENCY_LIST_REQUEST,
);

export const getCurrencyListSuccess = createAction(
    CurrencyActionTypes.GET_CURRENCY_LIST_SUCCESS,
    props< { currencyList: Array<Currency> }>()
);

export const getCurrencyListFailure = createAction(
    CurrencyActionTypes.GET_CURRENCY_LIST_FAILURE,
    props<{ error: string; }>(),
);
