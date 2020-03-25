import {STREAMS_CREATE, STREAMS_DELETE, STREAMS_EDIT, STREAMS_FETCH, STREAMS_FETCH_ALL} from "../helper";
import streams from '../api/streams'
// redux-thunk dispatch
// redux-thunk type action creator//
// export const streamCreate = (formValues) => {
//    return async (dispatch) => {
//        let response = await streams.post(formValues)
//        dispatch({type: formValues, payload: {}})
//     }
// }

//
const restObj = '/streams'

export const streamCreate = formValues => async dispatch => {
    let response = await streams.post(restObj, formValues)
    dispatch({type: STREAMS_CREATE, payload: response.data})
}

export const streamEdit= (id, formValue) => async dispatch => {
    let response = await streams.put(`${restObj}/${id}`, {formValue})
    dispatch({type: STREAMS_EDIT, payload: response.data})
}

export const streamFetch = id => async dispatch => {
    let response = await streams.get(`${restObj}/${id}`)
    dispatch({type: STREAMS_FETCH, payload: response.data})
}

export const streamFetchAll = () => async dispatch => {
    let response = await streams.get(restObj)
    dispatch({type: STREAMS_FETCH_ALL, payload: response.data})
}

export const streamDelete = id => async dispatch => {
    let response = await streams.delete(`${restObj}/${id}`)
    dispatch({type: STREAMS_DELETE, payload: response.data})
}



