import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { App } from './app';
import { About, Home, MembersPage } from './app/components';
import { Menu } from './app/pages';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route component={App}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/members' component={MembersPage}/>
                    <Route path='/menu' component={Menu}/>
                </Switch>
            </div>
        </HashRouter>
    );
};