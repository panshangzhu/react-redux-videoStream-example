import {STREAMS_CREATE, STREAMS_DELETE, STREAMS_EDIT, STREAMS_FETCH, STREAMS_FETCH_ALL} from "../helper";
import streams from '../api/streams'
import routerHistroy from "../routerHistroy";
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
    // id, title, descript,

    //loading
    let response = undefined
    try {
       response  = await streams.post(restObj, formValues)
    } catch (e) {
        //
        //unloading,
       return;
    }

    //unloading.
    dispatch({type: STREAMS_CREATE, payload: response.data})
    routerHistroy.push('/')
}

export const streamEdit = (id, formValue) => async dispatch => {
    let response = await streams.patch(`${restObj}/${id}`, formValue)
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



