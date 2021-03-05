import * as types from '../actions/types';
import { data } from '../service/api';

const initialState = {
    virus:[]
}

export const coronaReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_DATA_CORONA:
            return {...state, virus: data}
        case types.GET_DATA_CORONA_2:
            return {...state, virus: data}
        default:
            return state;
    }
}
