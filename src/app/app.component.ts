import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes =[
    new Quote(1,"Time wasted can never be recovered"),
     new Quote(2,"Better late than never"),
     new Quote(3,"I have so much to do that i have to spent the first few hours in prayer")
   ];
   }
