import * as type from '../const'

export const FetchStudentsAction = (data) => {
    return { type: type.FETCH_STUDENTS, payload: data }
}