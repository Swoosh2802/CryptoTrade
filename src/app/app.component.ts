import { Component, Input } from '@angular/core';
import { LoggedUser } from './_models/loggedUser.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _opened: boolean = false;
  public _modeNum: number = 1;
  public _animate: boolean = true;
  title = 'CryptoTrade';

  constructor(public loggedUser : LoggedUser) { }

  public _toggleOpened(): void {
    this._opened = !this._opened;
  }

  public _MenuOpened(): void {
    this._opened = !this._opened;
  }
}
