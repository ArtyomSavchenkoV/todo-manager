import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BoardsList from '../boards-list'; 
import TodoBoard from '../todo-board';


const Controller = () => {

    return (
        <Router>
            <Switch>
                <Route
                    path='/'
                    exact
                    component={BoardsList}
                />
                <Route
                    path='/board'
                    exact
                    component={BoardsList}
                />
                <Route
                    path='/board/:id?'
                    render={({ match }) => <TodoBoard boardId={match.params.id}/>}
                />
                <Route
                    render={() => <h2>404 - page not found.</h2>}
                />
            </Switch>
        </Router>
    );
};


export default Controller;
