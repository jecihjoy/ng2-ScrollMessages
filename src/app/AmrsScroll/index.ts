import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AmrsComponent } from './amrs_scroll_messages/amrs.component';
import { AmrsService } from './services/amrs.services';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import {TimeAgoPipe} from 'time-ago-pipe';

export * from './services/amrs.services';
export * from './amrs_scroll_messages/amrs.component';


@NgModule({
  declarations: [
    AmrsComponent, TimeAgoPipe
  ],
  imports: [
    CommonModule, HttpModule,  VirtualScrollModule
  ],
  exports: [AmrsComponent],
})
export class AmrsScrollModule {

  static forRoot() {
    return {
      NgModule: AmrsScrollModule,
      providers: [ AmrsService]
    };
  }
 }
