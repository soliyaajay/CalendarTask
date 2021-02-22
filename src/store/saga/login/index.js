import { takeLatest, put, call } from 'redux-saga/effects';

import {
    LOGIN_WATCHER,
} from '../../constant';

import {
    userLoginError,
    userLoginWatcher,
    userLoginSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

function* onUserLogin(userLoginAction) {
    let { payload, resolve, reject } = userLoginAction;
    try {
        const header = { 'Content-Type': 'application/json' }

        const response = yield fetch(BASE_URL + API_URL.LOGIN, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(payload)
        }).then((res) => res.json());

        yield put(userLoginSuccess(response));        
        resolve(response);
    } catch (e) {
        yield put(userLoginError(e));        
        reject(e);        
    }
}

export function* userLoginActionWatcher() {
    yield takeLatest(LOGIN_WATCHER, onUserLogin)
}