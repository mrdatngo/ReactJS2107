import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducerAll from '../reducers';
import authSaga from '../sagas/authSaga';
import studentSaga from '../sagas/studentsSaga';
import { composeWithDevTools } from 'redux-devtools-extension'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducerAll, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// then run the saga
sagaMiddleware.run(authSaga)
sagaMiddleware.run(studentSaga)

export default store