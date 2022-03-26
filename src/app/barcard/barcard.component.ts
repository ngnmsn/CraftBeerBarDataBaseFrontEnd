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

  @Input() set bar(bar: Bar) {
    this._bar = bar;
    Logger.info(this._bar);
  }

  constructor() { }  

  ngOnInit(): void {
  }

}
