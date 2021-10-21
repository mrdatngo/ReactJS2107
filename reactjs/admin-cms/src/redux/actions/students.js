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