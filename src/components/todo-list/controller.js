import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import { removeList } from '../../actions';

import Layout from './views/layout';
import Header from './views/header';


const Controller = ({
    boardId,
    listId,
    boardsList,

    removeList,

    localize
}) => {
    const listStore = fetchData(boardsList, boardId, listId);

    const title = listStore ? (listStore.name) : (localize('todoList.notTodoList'));
    const header = <Header title={title} onDelete={()=>removeList({boardId, listId})}/>

    return (
        <Layout header={header} cardsElements={[]}/>    
    );
};


const mapStoreToProps = ({ boardsList }) => {
    return {
        boardsList
    };
};

const mapDispatchToProps = {
    removeList
};

export default compose(
    connect(mapStoreToProps, mapDispatchToProps),
    withLocalizationService
)(Controller);


/*
*   Fetch data from store for required board by boardId  
*/
const fetchData = (boardsList, boardId, listId) => {
    const {
        boards
    } = boardsList;
    const boardIndex = boards.findIndex(({ id }) => id === boardId);
    if (boardIndex < 0) {
        return false;
    }
     
    const currentBoard = boards[boardIndex];    
    const {
        todoLists
    } = currentBoard;
    const listIndex = todoLists.findIndex(({ id }) => id === listId);
    if (listIndex < 0) {
        return false;
    }

    return todoLists[listIndex];
}
