import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ptb1Component } from './ptb1/ptb1.component';
import { Ptb2Component } from './ptb2/ptb2.component';
import { BaitinhtongComponent } from './baitinhtong/baitinhtong.component';
import { Chiahetcho3Component } from './chiahetcho3/chiahetcho3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai5ScpComponent } from './bai5-scp/bai5-scp.component';

@NgModule({
  declarations: [
    AppComponent,
    Ptb1Component,
    Ptb2Component,
    BaitinhtongComponent,
    Chiahetcho3Component,
    Bai4Component,
    Bai5ScpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
