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
} from '../../action/types';

const initialState = {
	error: null,
	userRegistrationLoader: false,
	registrationData: [],
	userName: '',
	userPhone: '',
	userEmail: '',
	userPassword: '',
	userConfirmPassword: '',
	userToken: '',
};

export default function signupReducer(state = initialState, action) {
	switch (action.type) {
		case CLEAR_SIGNUP_FIELD:
			return {
				...state,
				error: null,
				userRegistrationLoader: false,
				registrationData: [],
				userName: '',
				userPhone: '',
				userEmail: '',
				userPassword: '',
				userConfirmPassword: '',
				userToken: '',
			};
		case USERTOKEN_CHANGED:
			return {
				...state,
				userToken: action.payload
			};
		case USERNAME_CHANGED:
			return {
				...state,
				userName: action.payload
			};
		case USEREMAIL_CHANGED:
			return {
				...state,
				userEmail: action.payload
			};
		case USERPASSWORD_CHANGED:
			return {
				...state,
				userPassword: action.payload
			};
		case USERCONFIRMPASSWORD_CHANGED:
			return {
				...state,
				userConfirmPassword: action.payload
			};
		case USERPHONE_CHANGED:
			return {
				...state,
				userPhone: action.payload
			};
		case SIGNUP_WATCHER:
			return {
				...state,
				userRegistrationLoader: true
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				error: null,
				registrationData: action.payload,
				userRegistrationLoader: false
			};
		case SIGNUP_FAILURE:
			return {
				...state,
				error: action,
				userRegistrationLoader: false
			};
		default:
			return state;
	}
}
