import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ExplorerComponent } from '../explorer/explorer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
