import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import {
    addNewList,
    removeList
} from '../../actions';

import TodoList from '../todo-list';

import Layout from './views/layout';
import Header from './views/header';
import NewListForm from './new-list-form';


const Controller = ({
    boardId,

    addNewList,
    removeList
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
        return ({
            element: <TodoList key={el.listId} listId={el.listId} boardId={boardId} />,
            key: el.listId
        });
    });

    console.log(boardId);

    todoListsElements.push({
        element: <NewListForm onConfirm={(fields)=>addNewList({...fields, boardId})}/>,
        key: 'new-list-form'
    });

    return (
        <Layout header={header} todoListsElements={todoListsElements}/>
    );
};


const mapStoreToProps = ({ boardsList }) => {
    return {
        boardsList
    };
};

const mapDispatchToProps = {
    addNewList,
    removeList
};

export default compose(
    connect(mapStoreToProps, mapDispatchToProps)
)(Controller);
