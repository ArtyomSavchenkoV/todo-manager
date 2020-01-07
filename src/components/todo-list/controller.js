import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';
import fetchObjectFromArrayById from '../../utils/fetch-object-from-array-by-id';

import { 
    setModalWindow,
    removeModalWindow,
    removeList,
    addNewCard
} from '../../actions';

import TodoCardForm from '../todo-card-form';

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
    addNewCard,

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

    const onAddCardButton = () => {
        setModalWindow({
            component: (
                <TodoCardForm
                    titleLocalizedText={localize('todoCard.create')}
                    onConfirm={(cardData)=>{
                        addNewCard({boardId, listId, ...cardData});
                        removeModalWindow();
                    }}
                    onCancel={removeModalWindow}
                />
            ),
            onClickSpaceArea: removeModalWindow
        });
    };

    const title = listStore ? (listStore.name) : (localize('todoList.theListIsNot'));
    const header = <Header title={title} onDelete={() => onDelete({title, boardId, listId})} />
    const addCardButton = <AddCardButton onClick={onAddCardButton} />;

    let cardsElements = [];
    if (listStore) {
        cardsElements = listStore.todoCards.map((el) => {
            return {
                element: (
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
    removeList,
    addNewCard
};

export default compose(
    connect(mapStoreToProps, mapDispatchToProps),
    withLocalizationService
)(Controller);


/*
*   Fetch data from store for required board by boardId  
*/
const fetchData = (boardsList, boardId, listId) => {   
    const currentBoard = fetchObjectFromArrayById(boardsList.boards, boardId);    
    if (currentBoard === false) {
        return false;
    }
    const currentTodoList = fetchObjectFromArrayById(currentBoard.todoLists, listId); 
    if (currentTodoList === false) {
        return false;
    }

    return currentTodoList;
};
