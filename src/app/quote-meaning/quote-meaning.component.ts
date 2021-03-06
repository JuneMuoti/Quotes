import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote-meaning',
  templateUrl: './quote-meaning.component.html',
  styleUrls: ['./quote-meaning.component.css']
})
export class QuoteMeaningComponent implements OnInit {
@Input() quote:Quote;
@Output() isComplete= new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}
