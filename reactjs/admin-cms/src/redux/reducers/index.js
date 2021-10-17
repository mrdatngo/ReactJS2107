import { combineReducers }  from 'redux'
import { authReducer } from './authReducer'
import { studentsReducer } from './studentReducer';

let reducerAll = combineReducers({ auth: authReducer, students: studentsReducer })

export default reducerAll;

