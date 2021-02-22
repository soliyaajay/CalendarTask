import {
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_WATCHER,
} from '../../constant';

import {
    USERFORGOTEMAIL_CHANGED,
} from '../types';

export function userForgotEmailChanged(payload) {
    return { type: USERFORGOTEMAIL_CHANGED, payload };
}

export function userForgotPasswordWatcher(payload, resolve, reject) {
    return { type: FORGOT_PASSWORD_WATCHER, payload, resolve, reject };
}

export function userForgotPasswordSuccess(payload) {
    return { type: FORGOT_PASSWORD_SUCCESS, payload: payload };
}

export function userForgotPasswordError(error) {
    return { type: FORGOT_PASSWORD_FAILURE, payload: error };
}
