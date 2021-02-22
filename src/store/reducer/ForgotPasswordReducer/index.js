import {
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILURE,
	FORGOT_PASSWORD_WATCHER,
} from '../../constant';

import {
  USERFORGOTEMAIL_CHANGED,
} from '../../action/types';

const initialState = {
  userForgotPaswordError: null,
  userForgotPaswordLoader: false,
  userForgotPaswordData: [],
  userEmail: '',
};

export default function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case USERFORGOTEMAIL_CHANGED:
      return {
        ...state,
        userEmail: action.payload
      };
    case FORGOT_PASSWORD_WATCHER:
      return {
        ...state,
        userForgotPaswordLoader: true
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        userForgotPaswordError: null,
        userForgotPaswordData: action.payload,
        userForgotPaswordLoader: false
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        userForgotPaswordError: action,
        userForgotPaswordLoader: false
      };
    default:
      return state;
  }
};
