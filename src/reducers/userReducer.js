import {FETCH_All_USER, FETCH_USER} from "../helper";
// MDV, MVVM,
// model drive view
// model-view, view-model,
const initState = {
    singleUser: null,
    allUser: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER:
            // spread operator,
            // three dot operator
            //Object.assign()
            return {...state, singleUser: action.payload.data}
        case FETCH_All_USER:
            return {...state, allUser: action.payload.data}
        default:
            return state
    }
}
