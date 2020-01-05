import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import { 
    setModalWindow,
    removeModalWindow,
    removeList 
} from '../../actions';

import TodoCard from '../todo-card';
import DeleteElementDialogWindow from '../common/delete-element-dialog-window';
import Layout from './views/layout';
import Header from './views/header';
import AddCardButton from './views/add-card-button';


const Controller = ({
    boardId,
    listId,
    boardsList,

    setModalWindow,
    removeModalWindow,
    removeList,

    localize
}) => {
    const listStore = fetchData(boardsList, boardId, listId);
    const onDelete = ({boardId, listId, title}) => {
        setModalWindow({
            component: (
                <DeleteElementDialogWindow
                    descriptionLocalizedText={localize('todoList.rmListDecription') + ': ' + title}
                    onConfirm={()=>removeList({boardId, listId})}
                    onCancel={removeModalWindow}
                />
            ),
            onClickSpaceArea: removeModalWindow
        });
    };

    const title = listStore ? (listStore.name) : (localize('todoList.theListIsNot'));
    const header = <Header title={title} onDelete={() => onDelete({title, boardId, listId})} />
    const addCardButton = <AddCardButton onClick={()=>{}} />;

    let cardsElements = [];
    if (listStore) {
        cardsElements = listStore.todoCards.map((el) => {
            return {
                component: (
                    <TodoCard 
                        boardId={boardId}
                        listId={listId}
                        cardId={el.id}
                    />
                ),
                key: el.id
            }
        });
    }

    return (
        <Layout header={header} cardsElements={cardsElements} addCardButton={addCardButton} />    
    );
};


const mapStoreToProps = ({ boardsList }) => {
    return {
        boardsList
    };
};

const mapDispatchToProps = {
    setModalWindow,
    removeModalWindow,
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
