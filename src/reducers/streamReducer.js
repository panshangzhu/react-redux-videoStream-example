import {STREAMS_CREATE, STREAMS_DELETE, STREAMS_EDIT, STREAMS_FETCH, STREAMS_FETCH_ALL} from "../helper";

const initState = {
    streams: [],
    stream: undefined
}

const streamReducer = (state = initState, action) =>{
    switch (action.type) {
        case STREAMS_FETCH_ALL:
            return {...state, streams: [...action.payload]}
        case STREAMS_FETCH:
            return  {...state, stream: action.payload}
        case STREAMS_CREATE:
            return {...state, streams: [...state.streams, action.payload]}
        case STREAMS_EDIT:
            return {...state, streams: state.streams.map(stm => stm.id === action.payload.id ? action.payload : stm)}
        case STREAMS_DELETE:
            return {...state, streams: state.streams.filter(stm => stm.id !== action.payload)}
        default:
            return state

    }
}

export default streamReducer
