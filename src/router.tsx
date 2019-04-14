import * as React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { MembersPage } from './app/components';
import { Menu } from './app/pages';
import About from './app/components/about';
import Home from './app/components/home';
import MasterPage from './app/components/masterpage';
import NotFound from './app/components/not-found';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router>
            <div className="container-fluid">
                <Route component={ MasterPage }/>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
                    <Route path='/folio' component={ About }/>
                    <Route path='/contact' component={ About }/>
                    <Route path='/menu' component={ Menu }/>
                    <Route component={ NotFound }/>
                </Switch>
            </div>
        </Router>
    );
};