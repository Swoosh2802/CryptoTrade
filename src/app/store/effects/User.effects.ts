import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromAction from '../action/User.action';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/User.model';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions,
                private userService: UserService) {
    }

    getLogin$ : Observable<Action> = createEffect(()=>
        this.actions$.pipe(
            ofType(fromAction.PostLogin),
            mergeMap((loginUser) =>
                this.userService.toLogin(loginUser.payload).pipe(
                    map((user: any) => {
                        return fromAction.PostLoginSuccess({payload: new User(user)});
                    }),
                    catchError((error) =>
                        of(fromAction.PostLoginFail(error)))
                    )
            )
        )
    );
}
 