import { combineReducers } from "redux";
import AddUserReducer from './reducers/AddUserReducer'

const RootReducer = combineReducers({
    AddUserReducer,
})

export default RootReducer;