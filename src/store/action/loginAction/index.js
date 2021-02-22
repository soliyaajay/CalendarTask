import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_WATCHER,
} from '../../constant';

import {
    USERLOGINEMAIL_CHANGED,
    USERLOGINPASSWORD_CHANGED,
    USERTOKEN_CHANGED,
} from '../types';

export function userLoginTokenChanged(payload) {
    return { type: USERTOKEN_CHANGED, payload };
}

export function userLoginEmailChanged(payload) {
    return { type: USERLOGINEMAIL_CHANGED, payload };
}

export function userLoginPasswordChanged(payload) {
    return { type: USERLOGINPASSWORD_CHANGED, payload };
}

export function userLoginWatcher(payload, resolve, reject) {
    return { type: LOGIN_WATCHER, payload, resolve, reject };
}

export function userLoginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload: payload };
}

export function userLoginError(error) {
    return { type: LOGIN_FAILURE, payload: error };
}
