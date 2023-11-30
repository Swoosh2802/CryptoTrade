import { Component, OnInit } from '@angular/core';
import * as fromAction from "../store";
import { Store, select } from '@ngrx/store';
import { ICrypto } from '../_interfaces/crypto';
import { ICryptoState } from '../store/reducer/Crypto.reducer';

@Component({
  selector: 'app-getcryptos',
  templateUrl: './getcryptos.component.html',
  styleUrls: ['./getcryptos.component.css']
})
export class GetcryptosComponent implements OnInit {
  cryptos: ICrypto[] = [];
  tabCrypto: string[] = [];
  public isLoading: boolean = false;
  
  constructor(private _store: Store<ICryptoState>) { }

  ngOnInit() : void {
    this._store.dispatch(fromAction.GetCryptoLoad());
    this._store.dispatch(fromAction.GetCoursLoad());
    this.getCryptoTab();
  }

  public getCryptoTab(): void {
    const cryptoTab$ = this._store.pipe(select(fromAction.GetCryptoTab));
    cryptoTab$.subscribe(res => {
      this.isLoading = res.isLoading;
      this.cryptos = res.Data;
      this.getCryptoCourses();
    });
  }

  public getCryptoCourses(): void {
    const course$ = this._store.pipe(select(fromAction.GetCryptoCourses));
    course$.subscribe(res => {
      this.tabCrypto = res.Course;
    });
  }
}
