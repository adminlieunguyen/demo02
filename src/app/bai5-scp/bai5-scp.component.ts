import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai5-scp',
  templateUrl: './bai5-scp.component.html',
  styleUrls: ['./bai5-scp.component.css']
})
export class Bai5ScpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Tinh()
  {
    let sochinhphuong = (n) =>{
      return   Math.pow(Math.floor(Math.sqrt(n)),2)==n;
    }
    let s = [3,4,8,10,25,55].filter(sochinhphuong);
    console.log(s);
  }
}
