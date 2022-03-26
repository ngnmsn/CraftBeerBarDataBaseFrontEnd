import { Component, OnInit, Input } from '@angular/core';
import { BarcardComponent } from '../barcard/barcard.component'
import { Bar } from '../bar'

import { Logger } from '../logger';

@Component({
  selector: 'app-barlist',
  templateUrl: './barlist.component.html',
  styleUrls: ['./barlist.component.scss']
})
export class BarlistComponent implements OnInit {
  
  _barlist: Bar[] = [];
  
  @Input() set barlist(barlist: Bar[]) {
    this._barlist = barlist;
  }

  constructor() { }
  // barlist: string[] = ["クラフトマン横浜", "クラフトマン五反田"]

  ngOnInit(): void {
  }

}
