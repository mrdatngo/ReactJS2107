import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './views/pages/login/LoginPage';
import { DefaultLayout } from './views/layouts/DefaultLayout';
import routers from './routers';
import { Page404 } from './views/pages/page404/Page404';
import PrivateRoute from './routers/PrivateRoute';

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
        <PrivateRoute path="/">
          <DefaultLayout routers={routers} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
