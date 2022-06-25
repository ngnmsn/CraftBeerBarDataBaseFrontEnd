import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Station } from './station';
import { ResponseGetStations } from './response-interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  stations!: Station[];

  private url = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getStations(): Observable<ResponseGetStations> {
    return this.http.get<ResponseGetStations>(`${this.url}/getStations`);
  }
}