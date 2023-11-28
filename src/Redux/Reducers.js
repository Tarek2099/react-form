import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    signup: true,
    signin: false
}


export const Reducer = (state = INITIAL_STATE, aciton) => {
    switch (aciton.type) {
        case actionTypes.showSignup:
            return {
                ...state,
                signup: false,
                signin :true,
        }


      default:
        break;
    }
}