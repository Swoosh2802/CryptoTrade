import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICryptoState } from "../reducer/Crypto.reducer";
 
const getState = createFeatureSelector<ICryptoState>('crypto');
 
export const allCryptos = createSelector(getState, (state: ICryptoState) => {
    return state;
});
 
export const GetCryptoTab = createSelector(getState, (state: ICryptoState) => {
    const cryptos = state.Data;
    return { ...state, Data: cryptos };
});

export const GetCryptoCourses = createSelector(getState, (state:ICryptoState)=>{
    const course = state.Course;
    return { ...state, Course : course};
})