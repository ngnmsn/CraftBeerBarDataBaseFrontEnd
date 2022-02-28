import { Component, OnInit } from '@angular/core';

import { Station } from '../station';
import { StationsService } from '../stations.service';

import { Logger } from '../logger';

import { ResponseGetStations } from '../response-interface';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  responseGetStations!: ResponseGetStations;
  stations: Station[] = [];

  constructor(
    private stationsService: StationsService
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

  areaFilter(area: string): void {

  }

}
