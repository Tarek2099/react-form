import * as actionTypes from "./actionTypes";


export const signup = signup => {
    return {
        type: actionTypes.showSignup,
        payload: signup
    }
}
export const signin = (signin) => {
  return {
    type: actionTypes.showSignin,
    payload: signin,
  };
};
