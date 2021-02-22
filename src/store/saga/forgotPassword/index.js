import { takeLatest, put, call } from 'redux-saga/effects';

import {
    FORGOT_PASSWORD_WATCHER,
} from '../../constant';

import {
    userForgotPasswordError,
    userForgotPasswordSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

function* onUserForgotPassword(onUserForgotPasswordAction) {
    let { payload, resolve, reject } = onUserForgotPasswordAction;
    try {
        const header = { 'Content-Type': 'application/json' }

        const response = yield fetch(BASE_URL + API_URL.FORGOT_PWD, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(payload)
        }).then((res) => res.json());

        yield put(userForgotPasswordSuccess(response));        
        resolve(response);
    } catch (e) {
        yield put(userForgotPasswordError(e));        
        reject(e);        
    }
}

export function* userForgotPasswordActionWatcher() {
    yield takeLatest(FORGOT_PASSWORD_WATCHER, onUserForgotPassword)
}