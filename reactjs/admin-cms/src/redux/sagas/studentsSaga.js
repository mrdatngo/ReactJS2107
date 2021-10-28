import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* fetchStudents(action) {
    try {
        let data = yield call(Api.fetchStudents, action.payload);
        yield put({
            type: type.FETCH_STUDENTS_SUCCEEDED, payload: { data }
        });
    } catch (e) {
        yield put({ type: type.FETCH_STUDENTS_FAILED, message: e.message });
    }
}

function* addStudent(action) {
    try {
        yield call(Api.addStudent, action.payload);
        yield put({
            type: type.ADD_STUDENTS_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_STUDENTS_FAILED, message: e.message });
    }
}

function* deleteStudent(action) {
    try {
        yield call(Api.deleteStudent, action.payload);
        yield put({
            type: type.DELETE_STUDENT_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.DELETE_STUDENT_FAILED, message: e.message });
    }
}

function* fetchStudent(action) {
    console.log("fetch: ", action)
    try {
        let data = yield call(Api.fetchStudent, action.payload);
        yield put({
            type: type.FETCH_STUDENT_SUCCEEDED, payload: { data }
        });
    } catch (e) {
        yield put({ type: type.FETCH_STUDENT_FAILED, message: e.message });
    }
}


function* updateStudent(action) {
    console.log("update: ", action)
    try {
        yield call(Api.updateStudent, action.payload);
        yield put({
            type: type.UPDATE_STUDENT_SUCCEEDED
        });
        // yield put({
        //     type: type.FETCH_STUDENT, payload: action.payload.id
        // });
    } catch (e) {
        yield put({ type: type.UPDATE_STUDENT_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.FETCH_STUDENTS, fetchStudents);
    yield takeEvery(type.ADD_STUDENTS, addStudent);
    yield takeEvery(type.DELETE_STUDENT, deleteStudent);
    yield takeEvery(type.FETCH_STUDENT, fetchStudent);
    yield takeEvery(type.UPDATE_STUDENT, updateStudent);
}

export default mySaga;