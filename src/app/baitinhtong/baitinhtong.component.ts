import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitinhtong',
  templateUrl: './baitinhtong.component.html',
  styleUrls: ['./baitinhtong.component.css']
})
export class BaitinhtongComponent implements OnInit {

  constructor() { }
  a:any;
  b:any;
  giatritong: any;
  ngOnInit(): void {
  }

  Tinh()
  {
    this.giatritong  =  Number.parseInt(this.a) +  Number.parseInt(this.b);
   }

}
