import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chiahetcho3',
  templateUrl: './chiahetcho3.component.html',
  styleUrls: ['./chiahetcho3.component.css']
})
export class Chiahetcho3Component implements OnInit {

  constructor() { }
  a: any;
  b: any;
  kq: any;

  Tinh()
  {

      if (this.a%3==0 && this.b%3==0)
      {
        this.kq =  Number.parseInt(this.a) + Number.parseInt(this.b);
      }
      else

      this.kq = " Yêu Cầu Nhập Lại số chia hêt cho 3"

  }

  ngOnInit(): void {
  }

}
