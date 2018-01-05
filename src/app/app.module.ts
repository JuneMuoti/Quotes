import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteMeaningComponent } from './quote-meaning/quote-meaning.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteMeaningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
