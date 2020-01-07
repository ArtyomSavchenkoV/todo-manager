import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';
import fetchObjectFromArrayById from '../../utils/fetch-object-from-array-by-id';
import { 
    setModalWindow,
    removeModalWindow,
    removeCard
} from '../../actions';

import DeleteElementDialogWindow from '../common/delete-element-dialog-window';

import Layout from './views/layout';
import CardState from './views/card-state';


const Controller = ({
    boardId,
    listId,
    cardId,

    boardsList,

    setModalWindow,
    removeModalWindow,
    removeCard,

    localize
}) => {
    const cardData = fetchData(boardsList, boardId, listId, cardId);

    let content = null;
    if (cardData) {
        const {
            name,
            description,
            state,
            date
        } = cardData;
        const cardState = <CardState cardState={state} />;

        content = (
            <Layout
                cardId={cardId}
                cardState={cardState}
                title={name}
                content={description}
                date={date}
                buttons={'##buttons'}
                
                onDelete={() => onDelete({boardId, listId, cardId, title: name, setModalWindow, removeModalWindow, removeCard, localize})}
            />
        );
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
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
    removeCard
};

export default compose(
    withLocalizationService,
    connect(mapStoreToProps, mapDispatchToProps)
)(Controller);


/*
*   Fetch data from store `cardData`  
*/
const fetchData = (boardsList, boardId, listId, cardId) => {   
    const currentBoard = fetchObjectFromArrayById(boardsList.boards, boardId);    
    if (currentBoard === false) {
        return false;
    }

    const currentTodoList = fetchObjectFromArrayById(currentBoard.todoLists, listId); 
    if (currentTodoList === false) {
        return false;
    }

    const currentCardData = fetchObjectFromArrayById(currentTodoList.todoCards, cardId); 
    if (currentCardData === false) {
        return false;
    }

    return currentCardData;
};


/*
*   Set modal window for delete card
*/
const onDelete = ({boardId, listId, cardId, title, setModalWindow, removeModalWindow, removeCard, localize}) => {
        setModalWindow({
            component: (
                <DeleteElementDialogWindow
                    descriptionLocalizedText={localize('todoCard.rmCardDescription') + ': ' + title}
                    onConfirm={()=>removeCard({boardId, listId, cardId})}
                    onCancel={removeModalWindow}
                />
            ),
            onClickSpaceArea: removeModalWindow
        });
    };
