import {auth, googleProvider, twitterProvider} from '../firebase';

export function googleLogin(){
    return dispatch => auth.signUpWithPopup(googleProvider);
}

export function twitterLogin(){
    return dispatch => auth.signUpWithPopup(twitterProvider);
}