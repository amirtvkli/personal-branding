// import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { Welcome } from './app/components';
import { Contact, NotFound, About, Folio, Menu } from './app/pages';
import { MainLayoutRoute } from './app/layouts';

const AppRouter = () => (
  <Router>
      <Switch>
        <MainLayoutRoute exact path="/" component={Welcome} />
        <MainLayoutRoute exact path="/about" component={About} />
        <MainLayoutRoute exact path="/folio" component={Folio} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

export default AppRouter;
