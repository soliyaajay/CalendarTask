import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_WATCHER,
} from '../../constant';

import {
    USERNAME_CHANGED,
    USERPASSWORD_CHANGED,
    USERCONFIRMPASSWORD_CHANGED,
    USEREMAIL_CHANGED,
    USERPHONE_CHANGED,
    USERTOKEN_CHANGED,
    CLEAR_SIGNUP_FIELD,
} from '../types';

export function clearSignupAllField() {
    return { type: CLEAR_SIGNUP_FIELD };
}

export function userTokenChanged(payload) {
    return { type: USERTOKEN_CHANGED, payload };
}

export function userNameChanged(payload) {
    return { type: USERNAME_CHANGED, payload };
}

export function userEmailChanged(payload) {
    return { type: USEREMAIL_CHANGED, payload };
}

export function userPasswordChanged(payload) {
    return { type: USERPASSWORD_CHANGED, payload };
}

export function userConfirmPasswordChanged(payload) {
    return { type: USERCONFIRMPASSWORD_CHANGED, payload };
}

export function userPhoneChanged(payload) {
    return { type: USERPHONE_CHANGED, payload };
}

export function userRegistrationWatcher(payload, resolve, reject) {
    return { type: SIGNUP_WATCHER, payload, resolve, reject };
}

export function userRegistrationSuccess(payload) {
    return { type: SIGNUP_SUCCESS, payload: payload };
}

export function userRegistrationError(error) {
    return { type: SIGNUP_FAILURE, payload: error };
}