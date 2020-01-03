import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import Layout from './views/layout';
import BoardItem from './views/board-item';
import NewBoardForm from './new-board-form';

const Controller = ({
    boardsStore
}) => {
    const {
        boards: boardsDataArray
    } = boardsStore;

    let boardsElements = boardsDataArray.map((el) => {
        return {
            key: el.id,
            element: <BoardItem key={el.id} />
        }
    });

    boardsElements.push({
            key: 'new-board-form',
            element: <NewBoardForm onConfirm={(data) => console.log(data)} />
        });

    return (
        <Layout
            boardsElements={boardsElements}
        />
    );
};


const mapStoreToProps = ({ boardsStore }) => {
    return {
        boardsStore
    }
}

export default compose(
    connect(mapStoreToProps)
)(Controller);
