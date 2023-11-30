import { createAction, props } from '@ngrx/store';
import { ICrypto } from '../../_interfaces/crypto';
import { HttpErrorResponse } from '@angular/common/http';

export const GetCryptoLoad = createAction(
    '[Crypto] Get Crypto'
);

export const GetCoursLoad = createAction(
    '[string] Get crypto course loading'
)

export const GetCryptoSuccess = createAction(
    '[Crypto] Get Crypto Success', props<{ payload: ICrypto[]}>()
);

export const GetCryptoFail = createAction(
    '[Crypto] Get Crypto Fail', props<{error: HttpErrorResponse}>()
);

export const GetAllCourse = createAction(
    '[string] Get crypto course', props<{ Course: string[]}>()
)