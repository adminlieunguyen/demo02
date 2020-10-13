import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptb2',
  templateUrl: './ptb2.component.html',
  styleUrls: ['./ptb2.component.css']
})
export class Ptb2Component implements OnInit {
  constructor() { }
  a: any;
  b: any;
  c: any;
  x1: any;
  x2: any;
  delta: any;
  kq: any;

  ngOnInit(): void {
  }

  GPTb2(){

    this.delta = this.b*this.b - 4*this.a*this.c;
    var message = this.a +"X^2" + " +" + this.b + "X "  + "+ " + this.c +  "=" + " 0 ";
    if(Number.parseInt(this.delta)<0)
    {
      this.kq= message + "Vô Nghiệm";
    }
    else
    {
      if(Number.parseInt(this.delta)==0)
      {
         this.kq= message + "  có nghiệm kép: x1 = x2 = " + (-this.b/(2*this.a));
      }
      else
      {
         this.kq= message + " có nghiệm là: X1 = "  + ((-this.b + this.delta)/(2*this.a))
         +" và  "+ "  X2 = "+((-this.b - this.delta)/(2*this.a));
      }
   }
  }
}
