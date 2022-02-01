import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcard',
  templateUrl: './barcard.component.html',
  styleUrls: ['./barcard.component.scss']
})
export class BarcardComponent implements OnInit {

  constructor() { }
  bar = {
    id: "0001",
    name: "クラフトマン横浜",
    tap: 31,
    Food: "Mex-Italian",
    areas: [
      {
        stationName: "横浜駅",
        walk_time: 5
      },
      {
        stationName: "反町駅",
        walk_time: 2
      }
    ]
  }
  

  ngOnInit(): void {
  }

}
