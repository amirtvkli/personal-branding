import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import  {App}  from './app';
import { MembersPage, MasterPage } from './app/components';
import { Menu } from './app/pages';
import Folio from './app/components/folio';
import About from './app/components/about';
import Home from './app/components/home';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route component={MasterPage}/>
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