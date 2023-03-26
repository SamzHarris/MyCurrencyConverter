import { createAction, props } from '@ngrx/store';

export enum CurrencyActionTypes {
    GET_CURRENCY_LIST = '[currency] get currency list',
    GET_CURRENCY_LIST_RESPONSE = '[currency] get currency list response',
}

export const getCurrencyList = createAction(
    CurrencyActionTypes.GET_CURRENCY_LIST,
);

export const getCurrencyListResponse = createAction(
  CurrencyActionTypes.GET_CURRENCY_LIST_RESPONSE,
  props<{
    code: string;
    desc: string;
  }>(),
);
