import { SET_WATERLEVEL, SET_SIZE, SET_WATTER_TARGET } from './waterLevelConstants'
import { createReducer } from '../reducerUtils'



const initialState = {
    waterLevel: 0,
    size: 150,
    watterTarget: 3.5
}


export const setWaterLevelReducer = (state, payload) => {

    return {
        ...state,
        waterLevel: payload
    }
}

export const setSizeReducer = (state, payload) => {

    return {
        ...state,
        size: payload
    }
}

export const setWatterTargetReducer = (state, payload) => {

    return {
        ...state,
        watterTarget: payload
    }
}




export default createReducer(initialState, {
    [SET_WATERLEVEL]: setWaterLevelReducer,
    [SET_SIZE]: setSizeReducer,
    [SET_WATTER_TARGET]: setWatterTargetReducer
})