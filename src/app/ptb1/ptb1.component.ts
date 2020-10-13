import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ptb1',
  templateUrl: './ptb1.component.html',
  styleUrls: ['./ptb1.component.css']
})
export class Ptb1Component implements OnInit {
  constructor() { }
  a: any;
  b: any;
  x: any;
  ngOnInit(): void {
  }
  GPT(){

    var message = this.a +"X" + "+" + this.b + "=" + "0";
     if(Number.parseInt(this.a)==0)
     {

       this.x=   message + "  Vô Nghiệm";
     }
     else
     {
       this.x =   message + "" + " có nghiệm là: x ="  + (- Number.parseInt(this.b)/Number.parseInt(this.a));
     }
   }
}


