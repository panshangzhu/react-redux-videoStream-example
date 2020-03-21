import { signIn, signOut } from "../actions/Oauth";
import { SIGN_IN, SIGN_OUT } from "../helper";

const initState = {
  isSignedIn: null,
  gid: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, gid: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
