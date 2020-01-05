import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BoardsList from '../boards-list'; 
import TodoBoard from '../todo-board';
import TodoList from '../todo-list';


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
                    path='/:id?'
                    exact
                    render={({ match }) => <TodoBoard boardId={Number.parseInt(match.params.id, 10)}/>}
                />
                <Route
                    path='/:boardId/:listId?'
                    render={({ match }) => <TodoList boardId={Number.parseInt(match.params.id, 10)}  listId={Number.parseInt(match.params.id, 10)}/>}
                />
                <Route
                    render={() => <h2>404 - page not found.</h2>}
                />
            </Switch>
        </Router>
    );
};


export default Controller;
