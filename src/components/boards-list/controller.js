import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import Layout from './views/layout';
import BoardItem from './views/board-item';

const Controller = ({
    boardsStore
}) => {
    const {
        boards: boardsDataArray
    } = boardsStore;

    const boardsElements = boardsDataArray.map((el) => {
        return <BoardItem key={el.id} />
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
