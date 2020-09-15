import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Home from './Components/Home';
import Main from './Components/Main';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/Main' component={Main} />
                </Switch>
            </Router>
        )
    }
}