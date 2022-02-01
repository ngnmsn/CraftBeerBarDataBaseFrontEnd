import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  areaList: string[] = ["恵比寿","新橋","新宿"]
  constructor() { }

  ngOnInit(): void {
  }

  areaFilter(area: string): void {

  }

}
