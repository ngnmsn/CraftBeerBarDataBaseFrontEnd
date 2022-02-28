import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Station } from './station';
import { ResponseGetStations } from './response-interface';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  stations!: Station[];

  private url = "http://localhost:80";

  constructor(
    private http: HttpClient
  ) { }

  getStations(): Observable<ResponseGetStations> {
    return this.http.get<ResponseGetStations>(`${this.url}/getStations`);
  }
}