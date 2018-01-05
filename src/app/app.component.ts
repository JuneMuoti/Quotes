import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
   constructor (){
     this.quotes=["Time wasted can never be recovered",
     "Better late than never",
     "I have so much to do that i have to spent the first few hours in prayer"
   ];
   }
}
