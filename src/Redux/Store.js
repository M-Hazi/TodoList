import {legacy_createStore, combineReducers} from "redux";
import Reducers from "./Reducers/Reducers"


const rootReducer=combineReducers({Reducers})
const store= legacy_createStore(rootReducer)

export default store;