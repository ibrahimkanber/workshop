import { applyMiddleware, combineReducers, createStore } from "redux";
import {todoReducer,counterReducer} from "../redux/old/reducer"
const rootReducer=combineReducers({todoReducer,counterReducer})
export const store=createStore(rootReducer)