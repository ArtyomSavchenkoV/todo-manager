import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import fetchObjectFromArrayById from '../../utils/fetch-object-from-array-by-id';

import Layout from './views/layout';
import CardState from './views/card-state';


const Controller = ({
    boardId,
    listId,
    cardId,

    boardsList
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

export default compose(
    connect(mapStoreToProps)
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
