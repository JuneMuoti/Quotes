import { Component, OnInit,Input } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote-meaning',
  templateUrl: './quote-meaning.component.html',
  styleUrls: ['./quote-meaning.component.css']
})
export class QuoteMeaningComponent implements OnInit {
@Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
