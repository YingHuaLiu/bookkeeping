import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from './views/tag';
import Money from 'views/money';
import Statistics from './views/statistics';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        {/*默认路由*/}
        <Redirect exact from='/' to='/money'/>
        <Route path='*'>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  return <h2>404</h2>;
}