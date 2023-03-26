import { createReducer, on, MetaReducer } from '@ngrx/store';
import { Currency } from '../../models/currency';
import { getCurrencyList } from '../currency/currency.actions';
import { Item } from '../../models/item';

export interface State {
  fromCurrency: Currency;
}

export const initialState: State = {
  fromCurrency: {
    code : 'ZAR',
    name : 'South African Rands'
  }
};

export const CurrencyReducer = createReducer(
  initialState,
);

