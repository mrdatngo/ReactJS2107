import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Api from "../../apis"
import { saveToken } from '../../helpers/storage';

// worker Saga: will be fired on USER_LOGIN actions
function* login(action) {
    try {
        const data = yield call(Api.login, action.payload);
        if (data.success) {
            saveToken (data.token)
            yield put({ type: "USER_LOGIN_SUCCEEDED", payload: {
                username: data.username,
                token: data.token
            } });
        } else {
            yield put({ type: "USER_LOGIN_FAILED", message: data.message });
        }
    } catch (e) {
        yield put({ type: "USER_LOGIN_FAILED", message: e.message });
    }
}

/*
  Starts fetchUser on each dispatched `USER_LOGIN` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("USER_LOGIN", login);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
// */
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;