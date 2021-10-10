import { combineReducers }  from 'redux'
import { authReducer } from './authReducer'

let reducerAll = combineReducers({ auth: authReducer })

export default reducerAll;

