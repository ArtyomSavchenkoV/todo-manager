import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import {
    addNewBoard
} from '../../actions';

import Layout from './views/layout';
import BoardItem from './views/board-item';
import NewBoardForm from './new-board-form';

const Controller = ({
    boardsList,

    addNewBoard
}) => {
    const {
        boards: boardsDataArray
    } = boardsList;

    let boardsElements = boardsDataArray.map((el) => {
        return {
            key: el.id,
            element: <BoardItem key={el.id} />
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
    connect(mapStoreToProps, mapDispatchToProps)
)(Controller);
