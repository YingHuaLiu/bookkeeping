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
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`;

export default function App() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}

function NoMatch() {
  return <h2>404</h2>;
}