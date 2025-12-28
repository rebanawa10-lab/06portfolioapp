import { Injectable } from '@angular/core';


//DB HttpClient
import { HttpClient } from '@angular/common/http';  // HttpClient
import { Observable } from 'rxjs';                  // Observable
import { HttpParams } from '@angular/common/http';  // HttpParams
import { environment } from '../../../src/environments/environment';
import { HttpHeaders } from '@angular/common/http';// Post


@Injectable({
  providedIn: 'root',
})
export class DataService {


   constructor(private http: HttpClient) { }

  // Portfolio START
  private apiURLPortfolioSaleman = `${environment.apiUrl}/api/portfolio/salesman`;

  private apiURLPortfolioSalemanYr = `${environment.apiUrl}/api/portfolio/summaryyr`;
                                                          
  private apiURLPortfolioSalemanYrURL = `${environment.apiUrl}/api/portfolio/summaryyrurl`;

  // Portfolio END


  // Portfolio START
  getPortfolioSaleman(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURLPortfolioSaleman);
  }

  getPortfolioSalemanYR(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURLPortfolioSalemanYr);
  }

  getPortfolioSalemanYRURL(): string {
    return this.apiURLPortfolioSalemanYrURL.toString();
  }


   // Portfolio End
  
}
