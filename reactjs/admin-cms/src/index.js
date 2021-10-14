import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jsonwebtoken'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getToken } from './helpers/storage';
import store from './redux/store';

let token = getToken()

if (token) {
  let decodedData = jwt.decode(token)
  console.log(decodedData)

  let exp = decodedData.exp * 1000 // timestamp miliseconds
  let curTimeStamp = new Date().getTime() // miliseconds

  if (exp > curTimeStamp) {
    // alert("valid")
    // if token still valid
    store.dispatch({
      type: "USER_LOGIN_SUCCEEDED", payload: {
        username: decodedData.username,
        token
      }
    })
  } else {
    // alert("Expired!")
    // redirect login
  }
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
