import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from './views/Tags';
import Money from 'views/Money';
import Statistics from './views/Statistics';
import styled from 'styled-components';
import {Tag} from 'views/Tag';

const AppWrapper = styled.div`
  color: #333;
`;

export default function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route exact path="/tags/:id">
            <Tag/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
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