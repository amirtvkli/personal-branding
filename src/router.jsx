import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Home from './app/components/home';
import Menu from './app/components/menu';
import Contact from './app/components/contact';
import MasterPage from './app/components/masterpage';
import NotFound from './app/components/not-found';
import About from './app/components/about';
import Folio from './app/components/folio';

const AppRouter = () => 
    <Router>
        <div className="container-fluid">
            <MasterPage />
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/menu' component= { Menu}/>
                <Route path='/folio' component={ Folio }/>
                <Route path= '/contact' component= {Contact}/>
                <Route path='/about' component= { About } />
                <Route component = { NotFound }/>
            </Switch>
        </div>
    </Router>

export default AppRouter