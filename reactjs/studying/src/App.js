import React from 'react'
import './App.css';
import { DashsboardPage } from './pages/dashboard/DashboardPage';
import LoginPage from './pages/login-page/LoginPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ClockPage } from './pages/life-circle/ClockPage';
import { ClockPageFc } from './pages/hooks/ClockPageFc';

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
          {/* <ul>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul> */}
          <ul>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/clockfc">Clock</Link>
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
          <Route path="/clock">
            <ClockPage />
          </Route>
          <Route path="/clockfc">
            <ClockPageFc />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
