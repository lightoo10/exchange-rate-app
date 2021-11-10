import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  apiUrl = environment.baseApiUrl + '/api/exchange-rate/v1';
  constructor(private http: HttpClient) {}

  getLstExchange(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  convertExchangeRate(exchange:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/convert`, exchange);
  }
}
