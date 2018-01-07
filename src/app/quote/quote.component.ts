import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”","— Albert Einstein",new Date(2018,0,1)),
     new Quote(2,"“Live as if you were to die tomorrow. Learn as if you were to live forever. ”","—  Mahatma Gandhi",new Date(2018,0,3)),
     new Quote(3,"“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”","— Richard Feynman",new Date(2018,0,5))
   ];
toogleMeaning(index){
  this.quotes[index].showMeaning = !this.quotes[index].showMeaning;
};
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.dateCreated = new Date(quote.dateCreated)
  this.quotes.push(quote)
}
constructor(){};





  ngOnInit() {};
};
