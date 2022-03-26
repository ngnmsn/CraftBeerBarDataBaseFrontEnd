import { Component, OnInit } from '@angular/core';
import { BarlistComponent } from '../barlist/barlist.component';

import { Station } from '../station';
import { StationsService } from '../stations.service';

import { Bar } from '../bar'
import { BarlistService } from '../barlist.service';

import { Logger } from '../logger';

import { ResponseGetStations, ResponseGetBarList } from '../response-interface';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  responseGetStations!: ResponseGetStations;
  responseGetBarList!: ResponseGetBarList;
  stations: Station[] = [];
  barList: Bar[] = [];
  keyword: string = "";

  constructor(
    private stationsService: StationsService,
    private barListService: BarlistService
  ) { }

  ngOnInit(): void {
    this.getStations()
  }

  getStations(): void {
    Logger.info("Hello");
    this.stationsService.getStations().subscribe(res => {
      this.responseGetStations = res;
      Logger.info(this.responseGetStations);
      this.stations = this.responseGetStations.stations;
      Logger.info(this.stations)
    })
  }

  getBarList(): void {
    this.barListService.getBarList(this.keyword).subscribe(res => {
      this.responseGetBarList = res;
      Logger.info(this.responseGetBarList);
      this.barList = this.responseGetBarList.barList;
      Logger.info(this.barList);
    })
  }

}
