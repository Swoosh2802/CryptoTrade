import { Action, createReducer, on } from '@ngrx/store';
import { ICrypto } from '../../_interfaces/crypto'; 
import * as Actions from '../action/Crypto.action';

export interface ICryptoState {
    Data: ICrypto[];
    Course: string[];
    isLoading: boolean;
    message: string;
}

export const initialState: ICryptoState = {
    Course:[],
    Data: [],
    isLoading: false,
    message: ''
};

const cryptoReducer = createReducer(
    initialState,
    on(Actions.GetCryptoLoad, state => ({ ...state, isLoading: true })),
    on(Actions.GetCoursLoad, (state) => ({ ...state, isLoading: true })),
    on(Actions.GetAllCourse, (state,{Course}) => ({ Course: Course, Data:state.Data, isLoading: state.isLoading, message: 'Cours chargé'})),
    on(Actions.GetCryptoSuccess, (state,{payload}) => ({ Course:state.Course, Data:payload, isLoading: false, message: 'Data fetch Successfully!'})),
    on(Actions.GetCryptoFail, state => ({ Course:state.Course,Data: [], isLoading: false, message: 'Something went wrong!'})),
)

export function reducerCrypto(state: ICryptoState | undefined, action: Action): any {
    return cryptoReducer(state, action);
}

export const GetCryptoSuccess = (state: ICryptoState) => {
    return {
        Data: state.Data, isLoading: state.isLoading, message: state.message 
    }
};

export const GetCryptoLoad = (state: ICryptoState) => {
    return {
        isLoading: state.isLoading, Data: state.Data
    }
};

export const GetCryptoFail= (state: ICryptoState) => {
    return {
        Data: state.Data, isLoading: state.isLoading, message: state.message
    }
};

export const GetAllCourse = (state:ICryptoState) => {
    return{
        Data: state.Data, isLoading: state.isLoading, message: state.message, Course: state.Course
    }
}

export const GetCoursLoad = (state:ICryptoState) => {
    return {
        isLoading: state.isLoading, Data: state.Data
    }
}