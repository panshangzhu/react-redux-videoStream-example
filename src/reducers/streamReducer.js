import {STREAMS_CREATE, STREAMS_DELETE, STREAMS_EDIT, STREAMS_FETCH_ALL} from "../helper";

const streamReducer = (state = [], action) =>{
    switch (action.type) {
        case STREAMS_FETCH_ALL:
            return [...action.payload]
        case STREAMS_CREATE:
            return [...state, action.payload]
        case STREAMS_EDIT:
            return state.map(stm => stm.id === action.payload.id ? action.payload : stm)
        case STREAMS_DELETE:
            return state.filter(stm => stm.id !== action.payload)
        default:
            return state

    }
}

export default streamReducer
