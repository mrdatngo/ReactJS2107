
import * as type from '../const'

let initialState = {
    students: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
    addStudent: {}
}

function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_STUDENTS:
            return {
                ...state,
                students: {
                    loading: true,
                    message: "",
                    data: [],
                    total: 0,
                }
            }

        case type.FETCH_STUDENTS_SUCCEEDED:
            return {
                ...state,
                students: {
                    loading: false,
                    message: "",
                    data: action.payload.data.list,
                    total: Number(action.payload.data.total)
                }
            }

        case type.FETCH_STUDENTS_FAILED:
            return {
                ...state,
                students: {
                    loading: false,
                    message: action.message,
                    data: [],
                    total: 0
                }
            }

        default:
            return state
    }
}

export { studentsReducer }