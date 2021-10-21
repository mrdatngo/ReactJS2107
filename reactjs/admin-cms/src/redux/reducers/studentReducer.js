
import * as type from '../const'

let initialState = {
    students: {
        loading: false,
        data: [],
        message: "",
        total: 0
    },
    addStudent: {
        loading: false,
        success: false,
        message: ""
    },
    deleteStudent: {
        loading: false,
        success: false,
        message: ""
    }
}

function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_STUDENTS:
            return {
                ...state,
                students: {
                    ...state.students,
                    loading: true,
                    message: "",
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

        case type.ADD_STUDENTS:
            return {
                ...state,
                addStudent: {
                    loading: true,
                    success: false,
                    message: ""
                }
            }

        case type.ADD_STUDENTS_SUCCEEDED:
            return {
                ...state,
                addStudent: {
                    loading: false,
                    success: true,
                    message: "Add student success!"
                }
            }

        case type.ADD_STUDENTS_FAILED:
            return {
                ...state,
                addStudent: {
                    loading: false,
                    success: false,
                    message: action.message
                }
            }

        case type.DELETE_STUDENT:
            return {
                ...state,
                deleteStudent: {
                    loading: true,
                    success: false,
                    message: ""
                }
            }

        case type.DELETE_STUDENT_SUCCEEDED:
            return {
                ...state,
                deleteStudent: {
                    loading: false,
                    success: true,
                    message: "Delete student successed!"
                }
            }

        case type.DELETE_STUDENT_FAILED:
            return {
                ...state,
                deleteStudent: {
                    loading: false,
                    success: false,
                    message: action.message
                }
            }


        default:
            return state
    }
}

export { studentsReducer }