import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BarlistComponent } from './barlist/barlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcardComponent } from './barcard/barcard.component';

import { StationsService } from './stations.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ExplorerComponent,
    BarlistComponent,
    BarcardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [
    StationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
