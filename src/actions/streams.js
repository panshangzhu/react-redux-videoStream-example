import {
  STREAMS_CREATE,
  STREAMS_EDIT,
  STREAMS_DELETE,
  STREAMS_FETCH,
  STREAMS_FETCH_ALL
} from "../helper";
import streams from "../api/streams";

//redux thunk dispatch
const restObj = "/streams";
export const streamCreate = formValues => async dispatch => {
  //loading  判断 formvalues 的内容 id title...
  let response = undefined;
  try {
    response = await streams.post(restObj, formValues);
  } catch (e) {
    // console.log(e);
    //unloading
    return;
  }

  //unloading
  dispatch({
    type: STREAMS_CREATE,
    payload: response.data
  });
};

export const streamEdit = (id, formValues) => async dispatch => {
  let response = await streams.put(`${restObj}/${id}`, formValues);
  dispatch({
    type: STREAMS_EDIT,
    payload: response.data
  });
};

export const streamFetch = id => async dispatch => {
  let response = await streams.get(`${restObj}/${id}`);
  dispatch({
    type: STREAMS_FETCH,
    payload: response.data
  });
};

export const streamFetchAll = () => async dispatch => {
  let response = await streams.get(restObj);
  dispatch({
    type: STREAMS_FETCH_ALL,
    payload: response.data
  });
};

export const streamDelete = id => async dispatch => {
  let response = await streams.delete(`${restObj}/${id}`);
  dispatch({
    type: STREAMS_DELETE,
    payload: id
  });
};
