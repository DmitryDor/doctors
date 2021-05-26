import {applyMiddleware, combineReducers, createStore} from 'redux';
import {doctorsReducer} from "./doctorsReducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    doctors: doctorsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;

