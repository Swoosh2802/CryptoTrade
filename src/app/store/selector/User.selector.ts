import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "../reducer/User.reducer";
 
const getState = createFeatureSelector<IUserState>('user');
 
export const loginSelector = createSelector(getState, (state: IUserState) => {
    return state;
});

export const loginSelectorGetUser = createSelector(getState, (state: IUserState) => {
    return { ...state, Data: state.Data };
});
