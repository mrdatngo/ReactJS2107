import React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector } from 'react-redux'

/**
* @author
* @function PrivateRoute
**/

export const PrivateRoute = ({ children, ...rest }) => {

    // let [isLoggedIn, _] = useState(store.getState().auth.isLoggedIn)

    let isLoggedIn = useSelector((state) => {
        return state.auth.isLoggedIn
    })

    return (
        <Route {...rest}
            render={
                ({ location }) => {
                    return !isLoggedIn ? (
                        <Redirect
                            to={{ pathname: "/login", state: { location } }}
                        />
                    ) : (children)
                }
            }
        />
    )
}



export default PrivateRoute