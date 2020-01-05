import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import { withLocalizationService } from '../hoc';

import {
    addNewList
} from '../../actions';

import TodoList from '../todo-list';

import Layout from './views/layout';
import Header from './views/header';
import NewListForm from './new-list-form';

/*
*   Fetch data from store for required board by boardId  
*/
const fetchData = (boardsList, boardId) => {
    const {
        boards
    } = boardsList;
    const itemIndex = boards.findIndex(({ id }) => id === boardId);

    if (itemIndex > -1) {
        return boards[itemIndex]
    }
    return false;
}


const Controller = ({
    boardId,
    boardsList,

    addNewList,

    localize
}) => {

    const boardStore = fetchData(boardsList, boardId);

    let todoListsElements = [];

    if (boardStore) {
        const {
            todoLists = []
        } = boardStore;
    
        todoListsElements = todoLists.map((el) => {
            return ({
                element: <TodoList key={el.id} listId={el.id} boardId={boardId} />,
                key: el.id
            });
        });

        todoListsElements.push({
            element: <NewListForm onConfirm={(fields)=>addNewList({...fields, boardId})}/>,
            key: 'new-list-form'
        });
    }

    const boardName = boardStore ? (
        localize('board.name') + ': ' + boardStore.name
    ) : (
        localize('board.theBoardIsNot')
    );

    const header = <Header boardName={boardName}/>;

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
    addNewList
};

export default compose(
    connect(mapStoreToProps, mapDispatchToProps),
    withLocalizationService
)(Controller);
