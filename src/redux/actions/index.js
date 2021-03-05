import * as types from './types';

export const incrementCounter = (val) => ({
    type: types.INCREMENT,
    val
})

export const decrementCounter = (val) => ({
    type: types.DECREMENT,
    val
})