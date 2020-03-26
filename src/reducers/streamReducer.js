import {STEAMS_CREATE, STEAMS_DELETE, STEAMS_EDIT, STEAMS_FETCH_ALL} from "../helper";

const streamReducer = (state = [], action) => {
    switch (action.type) {
        case STEAMS_FETCH_ALL:
            return[...state, ...action.payload]
        case STEAMS_CREATE:
            return [...state, action.payload]
        case STEAMS_EDIT:
            return state.map(stm => stm.id === action.payload.id ? action.payload : stm)
            // return [...state, action.payload]
        case STEAMS_DELETE:
            return state.filter(str => str.id !== action.payload)
        default:
            return state
    }
}

export default streamReducer