import React from 'react'
import './App.css';
import { DashsboardPage } from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login-page/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// function App() {
//   return (
//     <div>
//       Hello ReactJS
//     </div>
//   );
// }

class App extends React.Component {

  render() {
    return (
      <Router>
        {/* navagation */}
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <DashsboardPage />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
