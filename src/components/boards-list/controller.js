import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import {
    addNewBoard
} from '../../actions';

import Layout from './views/layout';
import BoardItem from './views/board-item';
import NewBoardForm from './new-board-form';

const Controller = ({
    boardsList,

    addNewBoard,

    localize
}) => {
    const {
        boards: boardsDataArray
    } = boardsList;

    let boardsElements = boardsDataArray.map((el) => {
        return {
            key: el.id,
            element: (
                <BoardItem 
                    key={el.id} name={el.name} 
                    boardId={el.id} 
                    boardIdLocalizedText={localize('boardList.boardId')}
                    onDelete={()=>{}}
                />
            )
        }
    });

    boardsElements.push({
            key: 'new-board-form',
            element: <NewBoardForm onConfirm={addNewBoard} />
        });

    return (
        <Layout
            boardsElements={boardsElements}
        />
    );
};


const mapStoreToProps = ({ boardsList }) => {
    return {
        boardsList
    }
};

const mapDispatchToProps = {
    addNewBoard
};

export default compose(
    withLocalizationService,
    connect(mapStoreToProps, mapDispatchToProps)
)(Controller);
