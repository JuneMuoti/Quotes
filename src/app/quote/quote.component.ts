import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,"Time wasted can never be recovered"),
     new Quote(2,"Better late than never"),
     new Quote(3,"I have so much to do that i have to spent the first few hours in prayer")
   ];

  constructor() { }

  ngOnInit() {
  }

}
