import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AmrsComponent } from './AmrsScroll/amrs_scroll_messages/amrs.component';
import { AmrsService } from './AmrsScroll/services/amrs.services';
// import { VirtualScrollModule } from './directive/virtual_scroll';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import {TimeAgoPipe} from 'time-ago-pipe';
@NgModule({
  declarations: [
    AppComponent, AmrsComponent, TimeAgoPipe
  ],
  imports: [
    BrowserModule, HttpModule,  VirtualScrollModule
  ],
  providers: [AmrsService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
