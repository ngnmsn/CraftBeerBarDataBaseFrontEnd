import { Component, OnInit, Input } from '@angular/core';
import { Bar } from '../bar';
import { Logger } from '../logger';

@Component({
  selector: 'app-barcard',
  templateUrl: './barcard.component.html',
  styleUrls: ['./barcard.component.scss']
})
export class BarcardComponent implements OnInit {

  _bar!: Bar;
  listImageUrlBuilded!: string;
  private url = "http://localhost:80/image/";

  @Input() set bar(bar: Bar) {
    this._bar = bar;
    this.buildListImageUrl(bar.listImageUrl);
    Logger.info(this._bar);
  }

  constructor() { }  

  ngOnInit(): void {
  }

  buildListImageUrl(listImageUrl: string) {
    this.listImageUrlBuilded = this.url +listImageUrl
  }

}
