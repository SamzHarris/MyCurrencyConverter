import { createAction, props } from '@ngrx/store';
import { Currency } from '../../models/currency';

export enum CurrencyActionTypes {
    GET_CURRENCY_LIST_REQUEST = '[currency] get currency list request',
    GET_CURRENCY_LIST_SUCCESS = '[currency] get currency list success',
    GET_CURRENCY_LIST_FAILURE = '[currency] get currency list failure',
}

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
