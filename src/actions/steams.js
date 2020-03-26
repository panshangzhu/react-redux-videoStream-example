import {STEAMS_CREATE, STEAMS_EDIT, STEAMS_FETCH_ALL} from "../helper";
import steams from "../api/steams";

// redux-thunk dispatch
// export const steamCreate = (formValues) => {
//     return async dispatch => {
//         let res = await steams.post(formValues)
//         dispatch({type: formValues, payload: {}})
//     }
//     // return {
//     //     type: STEAMS_CREATE,
//     //     payload: steams.create('stream')
//     // }
// }
const restObj = '/streams'
export const steamCreate = formValues =>
    // loading action
     async dispatch => {
    let res = undefined
    try {
        res = await steams.post(restObj, formValues)
    } catch (e) {
        // unloading
        console.log('stream create error --->', e)
        return
    }
         // unloading
        dispatch({type: STEAMS_CREATE, payload: res.data})
}

export const steamEdit = (id, formValues) =>
    async dispatch => {
            let res = await steams.put(`${restObj}/${id}`, formValues)
            dispatch({type: STEAMS_EDIT, payload: res.data})
    }

export const steamFetchAll = () =>
    async dispatch => {
            let res = await steams.get(restObj)
            dispatch({type: STEAMS_FETCH_ALL, payload: res.data})
    }

export const steamFetch = id =>
    async dispatch => {
        let res = await steams.get(`${restObj}/${id}`)
        dispatch({type: STEAMS_CREATE, payload: res.data})
    }

export const steamDelete = id =>
    async dispatch => {
        let res = await steams.delete(`${restObj}/${id}`)
        dispatch({type: STEAMS_CREATE, payload: res.data})
    }
    // return {
    //     type: STEAMS_CREATE,
    //     payload: steams.create('stream')
    // }

