import React from 'react';

import TodoList from '../todo-list';

import Layout from './views/layout';
import Header from './views/header';
import NewListForm from './new-list-form';


const Controller = ({
    boardId
}) => {

    const header = <Header />;

    const dummy = [
        {listId: 1},
        {listId: 2},
        {listId: 3},
        {listId: 4},
        {listId: 5}
    ];

    let todoListsElements = dummy.map((el) => {
        return (
            <TodoList key={el.listId} listId={el.listId} boardId={boardId} />
        );
    });

    todoListsElements.push({
        element: <NewListForm onConfirm={()=>{}}/>,
        key: 'new-list-form'
    });

    return (
        <Layout header={header} todoListsElements={todoListsElements}/>
    );
};


export default Controller;
