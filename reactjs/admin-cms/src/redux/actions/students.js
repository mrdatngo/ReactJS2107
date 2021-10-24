import * as type from '../const'

export const FetchStudentsAction = (data) => {
    return { type: type.FETCH_STUDENTS, payload: data }
}

export const AddStudentsAction = (data) => {
    return { type: type.ADD_STUDENTS, payload: data }
}

export const DeleteStudentAction = (id) => {
    return { type: type.DELETE_STUDENT, payload: id }
}

export const FetchStudentAction = (id) => {
    return { type: type.FETCH_STUDENT, payload: id }
}

export const UpdateStudentAction = (data) => {
    return { type: type.UPDATE_STUDENT, payload: data }
}