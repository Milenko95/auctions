import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'


const baseUrl = 'https://api-core-dev.caronsale.de/api';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  getAuthentication(email: string, user: any): Observable<any> {
    return this.http.put(`${baseUrl}/v1/authentication/${email}`, user);
  }

  getAuctions(): Observable<any> {
    return this.http.get(`${baseUrl}/v2/auction/buyer/`);
  }


}

