import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../_models/User.model';
import * as Actions from '../action/User.action';

export interface IUserState {
    Data: User | null;
    message: string;
}

export const initialState: IUserState = {
    Data: null,
    message: ''
};

const userReducer = createReducer(
    initialState,
    on(Actions.PostLogin, state => ({ ...state })),
    on(Actions.PostLoginSuccess, (state, {payload}) => ({ Data: payload, message: 'Data fetch Successfully!'})),
    on(Actions.PostLoginFail, state => ({ Data: null, message: 'Something went wrong!'})),
)

export function reducerUser(state: IUserState | undefined, action: Action): any {
    return userReducer(state, action);
}

export const PostLogin = (state: IUserState) => {
    return {
        Data: state.Data
    }
};

export const PostUserSuccess = (state: IUserState) => {
    return {
        Data: state.Data, message: state.message 
    }
};

export const PostUserFail= (state: IUserState) => {
    return {
        Data: state.Data, message: state.message
    }
};