import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AccountDropDownComponent } from './account-drop-down/account-drop-down.component';
import { NgxPopper } from 'angular-popper';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; 
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store';
import { SidebarModule } from 'ng-sidebar';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

// Service et model
import { UserService } from './_services/user.service';
import { CryptoService } from './_services/cryptoService.services';
import { LoggedUser } from './_models/loggedUser.model';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { RankingsComponent } from './rankings/rankings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GetcryptosComponent } from './getcryptos/getcryptos.component';

// Reducer
import { reducerCrypto } from './store/reducer/Crypto.reducer';
import { reducerUser } from './store/reducer/User.reducer';

// Effects
import { CryptoEffects } from './store/effects/Crypto.effects';
import { UserEffects } from './store/effects/User.effects';

@NgModule({
  declarations: [
    AppComponent,
    AccountDropDownComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ContactComponent,
    HistoryComponent,
    RankingsComponent,
    HomeComponent,
    GetcryptosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    NgxPopper,
    StoreModule.forRoot({
        crypto: reducerCrypto, 
        user: reducerUser
    }),
    EffectsModule.forRoot([
      CryptoEffects,
      UserEffects
    ]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    CryptoService, 
    UserService,
    LoggedUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  }
}