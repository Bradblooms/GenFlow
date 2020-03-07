import { SET_WATERLEVEL, SET_SIZE, SET_WATTER_TARGET } from "./waterLevelConstants"
import { AsyncStorage } from "react-native";


export const getWaterLevel = () => async  dispatch => {
    try {
        const value = await AsyncStorage.getItem('waterLevel');
        const parseValue = JSON.parse(value)

        if (value !== null) {
            dispatch({
                type: SET_WATERLEVEL,
                payload: parseValue
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const setWaterLevel = (liter) => async dispatch => {
    try {
        const literdata = JSON.stringify(liter)
        await AsyncStorage.setItem('waterLevel', literdata);

        dispatch({
            type: SET_WATERLEVEL,
            payload: liter
        })
    } catch (error) {
        console.log(er)
        // Error saving data
    }
}

export const setSize = (ml) => async dispatch => {
    dispatch({
        type: SET_SIZE,
        payload: ml
    })
}



export const addWaterLevel = (liter) => (dispatch, getState) => {

    dispatch({
        type: SET_WATERLEVEL,
        payload: liter
    })

}

export const setWaterTarget = (ml) => async dispatch => {

    try {
        const watterTargetdata = JSON.stringify(ml)
        await AsyncStorage.setItem('waterTarget', watterTargetdata);
        dispatch({
            type: SET_WATTER_TARGET,
            payload: ml
        })
    } catch (err) {
        console.log(err)
    }

}


export const getWaterTarget = () => async  dispatch => {
    try {
        const value = await AsyncStorage.getItem('waterTarget');
        const parseValue = JSON.parse(value)

        if (value !== null) {
            dispatch({
                type: SET_WATTER_TARGET,
                payload: parseValue
            })
        }
    } catch (error) {
        console.log(error)
    }
}

