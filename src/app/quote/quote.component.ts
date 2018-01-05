import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"Time wasted can never be recovered","manage your time well,it is a precious commodity"),
     new Quote(2,"Better late than never","what matters us you made it"),
     new Quote(3,"I have so much to do that i have to spent the first few hours in prayer","God above all")
   ];
toogleMeaning(index){
  this.quotes[index].showMeaning = !this.quotes[index].showMeaning;
}
  constructor() { }

  ngOnInit() {
  }

}
