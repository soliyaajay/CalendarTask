import {all} from 'redux-saga/effects'

import {userLoginActionWatcher} from './login'
import {userRegisterActionWatcher} from './signup'
import {userForgotPasswordActionWatcher} from './forgotPassword'

export default function * root () {
  yield all([
    userLoginActionWatcher(),
    userRegisterActionWatcher(),
    userForgotPasswordActionWatcher(),
  ])
}
