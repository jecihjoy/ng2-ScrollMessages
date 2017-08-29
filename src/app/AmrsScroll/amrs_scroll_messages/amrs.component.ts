import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AmrsService } from '../services/amrs.services';
import { MsgSlack } from '../domain/amrs';
// import { ChangeEvent } from '../directive/virtual_scroll';
import { ChangeEvent } from 'angular2-virtual-scroll';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-amrs',
  templateUrl: './amrs.component.html',
  styleUrls: ['./amrs.component.css']
})
export class AmrsComponent implements OnInit, OnChanges {
 @Input()
 items: MsgSlack[];

  indices: ChangeEvent;
  buffer: MsgSlack[];
  ms: MsgSlack;
  scrollItems: MsgSlack[] = [];

  protected readonly bufferSize: number = 10;
  protected timer;
  protected loading: boolean;
  protected loaderSubscription: Subscription;
  constructor(private _service: AmrsService) {
  }

  protected slackMsg() {
    this._service.getScrollMessages()
      .subscribe(res => {
        console.log(res.has_more); // boolean function true or false when more
        console.log(res);
        console.log(res.messages); // array
        console.log(this.scrollItems.length);
        this.scrollItems = res.messages;

      });
  }


  ngOnInit() {
     this.slackMsg();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reset();
  }

  protected reset() {
   // this.fetchNextChunk(this.scrollItems.length, 10).then(chunk => this.scrollItems = chunk);
   this.fetchNextChunk(0, this.bufferSize, this.indices.end).then(chunk => this.scrollItems = chunk);
  }

  protected fetchMore(event: ChangeEvent) {
    this.indices = event;
    if (event.end === this.scrollItems.length) {return; }
    this.loading = true;
    this.fetchNextChunk(this.scrollItems.length, this.bufferSize, event).then(chunk => {
   this.scrollItems = this.scrollItems.concat(chunk);
    this.loading = false;

    }, () => this.loading = false);
  }

  protected fetchNextChunk(skip: number, limit: number, event?: any): Promise<MsgSlack[]> {
    return new Promise((resolve, reject) => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (skip < this.scrollItems.length) {
          return resolve(this.scrollItems.slice(skip + 1, skip + limit));
        }
        reject();
      }, 3000 + Math.random() * 1000);
    });
  }

}
