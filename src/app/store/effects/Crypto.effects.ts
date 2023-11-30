import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { CryptoService } from '../../_services/cryptoService.services';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ICrypto } from '../../_interfaces/crypto';
import * as fromAction from '../action/Crypto.action';

@Injectable()
export class CryptoEffects {
    tabCrypto: string[] = ["BTC", "ETH", "EGLD", "USDC", "ADA", "SOL", "DOGE", "SHIB", "UNI", "LINK", "LTC", "ALGO", "ATOM", "ICP", "XLM", "XTZ"];
    cryptoArray: ICrypto[] = [];
    cryptoCourse: string[] = [];

    constructor(private actions$: Actions,
                private cryptoService: CryptoService) {
    }

    getCryptos$ : Observable<Action> = createEffect(()=>
        this.actions$.pipe(
            ofType(fromAction.GetCryptoLoad),
            mergeMap(() =>
                this.cryptoService.getCryptos().pipe(
                    map((state: any) => {
                        this.tabCrypto.forEach((cryptoName:any)=>{
<<<<<<< Updated upstream
                            let object = state.Data[cryptoName]
                            this.cryptoArray.push(object);
=======
                            this.cryptoArray.push(state.Data[cryptoName]); 
>>>>>>> Stashed changes
                        })
                        return fromAction.GetCryptoSuccess({payload: this.cryptoArray});
                    }),
                    catchError((error) =>
                        of(fromAction.GetCryptoFail(error)))
                )
            )
        )
    );

    getCryptoCourses$ : Observable<Action> = createEffect(()=>
        this.actions$.pipe(
            ofType(fromAction.GetCoursLoad),
            mergeMap(() =>
            this.cryptoService.getCryptoEuroCurrentAmount(this.tabCrypto).pipe(
                map((test: any) => {
                    this.tabCrypto.forEach((cryptoName:any)=>{
                        let object = test[cryptoName]["EUR"]
                        this.cryptoCourse.push(object);
                    })
                    return fromAction.GetAllCourse({Course: this.cryptoCourse});
                }),
                catchError((error) =>
                    of(fromAction.GetCryptoFail(error)))
                )
            )
        )
    );
}
 