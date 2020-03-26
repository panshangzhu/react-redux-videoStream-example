import {combineReducers} from "redux"
import {FETCH_ALL_USER, FETCH_USER} from "../helper";

const initState = {
    singleUser: null,
    allUser: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER:
            // spread operator, three dot operator
            return {...state, singleUser: action.payload.data}
        case FETCH_ALL_USER:
            return {...state, allUser: action.payload.data}
        default:
            return state
    }
}