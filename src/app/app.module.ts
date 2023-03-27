import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffect } from './store/currency/currency.effects';
import { CurrencyReducer } from './store/currency/currency.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environment/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( { currency : CurrencyReducer}),
    EffectsModule.forRoot([CurrencyEffect]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
      StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
      }),
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
