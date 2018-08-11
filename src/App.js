import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppContainer from 'AppContainer';

const App = () =>
    <HashRouter>
      <Switch>
        <Route path="/" name="App Container" component={AppContainer}/>
      </Switch>
    </HashRouter>

export default App;
