import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import firebaseReducer from "./firebaseReducer";

const rootReducer = combineReducers({
    authReducer,
    firebaseReducer,
});

export default rootReducer;
