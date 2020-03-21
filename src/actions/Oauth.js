import { SIGN_IN, SIGN_OUT } from "../helper"

export const signIn=(gid)=>{
    return {
        type:SIGN_IN,
        payload:gid
    }
}
export const signOut=()=>{
    return {
        type:SIGN_OUT
    }
}
