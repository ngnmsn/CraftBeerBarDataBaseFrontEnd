import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bar } from './bar';
import { ResponseGetBarList } from './response-interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarlistService {

  barlist!: Bar[];

  private url = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getBarList(keyword: string): Observable<ResponseGetBarList> {
    return this.http.get<ResponseGetBarList>(`${this.url}/getBarList?keyword=${keyword}`);
  }
}
