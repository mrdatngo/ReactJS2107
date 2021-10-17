import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* fetchStudents(action) {
    try {
        const data = yield call(Api.fetchStudents, action.payload);
        yield put({
            type: type.FETCH_STUDENTS_SUCCEEDED, payload: { data }
        });
    } catch (e) {
        yield put({ type: type.FETCH_STUDENTS_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.FETCH_STUDENTS, fetchStudents);
}

export default mySaga;