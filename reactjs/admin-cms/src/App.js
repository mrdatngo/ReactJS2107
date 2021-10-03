import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginPage } from './views/pages/login/LoginPage';
import { DashboardPage } from './views/pages/dashboard/Dashboard';
import { DefaultLayout } from './views/layouts/DefaultLayout';
import routers from './routers';
import { Page404 } from './views/pages/page404/Page404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login"> { /* path : /login/* without exact  */}
          <LoginPage />
        </Route>
        <Route exact path="/page404">
          <Page404 />
        </Route>
        <Route path="/">
          <DefaultLayout routers={routers}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
