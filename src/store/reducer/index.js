import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import ForgotPasswordReducer from "./ForgotPasswordReducer";

const rootReducer = combineReducers({
	loginReducer,
	signupReducer,
	ForgotPasswordReducer,
});

export default rootReducer;
