import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barlist',
  templateUrl: './barlist.component.html',
  styleUrls: ['./barlist.component.scss']
})
export class BarlistComponent implements OnInit {

  constructor() { }
  barlist: string[] = ["クラフトマン横浜", "クラフトマン五反田"]

  ngOnInit(): void {
  }

}
