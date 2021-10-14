import * as type from '../const'

export const LoginAction = (data) => {
    return { type: type.USER_LOGIN, payload: data }
}