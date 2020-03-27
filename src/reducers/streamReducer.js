import { STREAMS_FETCH_ALL, STREAMS_CREATE, STREAMS_EDIT, STREAMS_DELETE } from "../helper";

export const streamReducer=(state=[],action)=>{
    switch(action.type){
        case STREAMS_FETCH_ALL:
           return [...state,...action.payload]
        case STREAMS_CREATE:
            return[...state,action.payload]
        case STREAMS_EDIT:
            return state.map(stn=>stn.id===action.payload.id?action.payload:stn)
        case STREAMS_DELETE:
            return state.filter(stn=>stn.id !== action.payload)
        default:
            return state;
    }
}