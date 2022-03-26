import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bar } from './bar';
import { ResponseGetBarList } from './response-interface';

@Injectable({
  providedIn: 'root'
})
export class BarlistService {

  barlist!: Bar[];

  private url = "http://localhost:80";

  constructor(
    private http: HttpClient
  ) { }

  getBarList(keyword: string): Observable<ResponseGetBarList> {
    return this.http.get<ResponseGetBarList>(`${this.url}/getBarList?keyword=${keyword}`);
  }
}
