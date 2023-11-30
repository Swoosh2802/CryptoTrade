import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICrypto } from '../_interfaces/crypto';
import { Url } from '../_models/Url.model';
 
@Injectable({
 providedIn: 'root'
})

export class CryptoService {
 
 constructor(private http: HttpClient) { }
 
 public getCryptos(): Observable<ICrypto[]> {
   return this.http.get<ICrypto[]>(Url.getUrlCrypto() + '/data/all/coinlist?api_key='+ Url.getAPIKeyCrypto());
 }

 public getCryptoEuroCurrentAmount(tabCrypto : string[]): Observable<string[]>{
  return this.http.get<string[]>(Url.getUrlCrypto() + '/data/pricemulti?fsyms='+tabCrypto.join(",")+'&tsyms=EUR');
 }
 
}