import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../_models/User.model';
import { UserLogin } from '../../_models/UserLogin.model';

export const PostLogin = createAction(
    '[User] Post Login', props<{ payload: UserLogin }>()
);

export const PostLoginSuccess = createAction(
    '[User] Post Login Success', props<{ payload: User }>()
);

export const PostLoginFail = createAction(
    '[User] Post Login Fail', props<{ error: HttpErrorResponse }>()
);