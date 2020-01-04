import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import {
    setModalWindow,
    removeModalWindow,
    addNewBoard,
    removeBoard
} from '../../actions';

import DeleteElementDialogWindow from '../common/delete-element-dialog-window';
import Layout from './views/layout';
import BoardItem from './views/board-item';
import NewBoardForm from './new-board-form';


const Controller = ({
    boardsList,

    setModalWindow,
    removeModalWindow,
    addNewBoard,
    removeBoard,

    localize
}) => {
    const {
        boards: boardsDataArray
    } = boardsList;

    const onDelete = (id, name) => {
        setModalWindow({
            component: (
                <DeleteElementDialogWindow
                    descriptionLocalizedText={localize('boardList.rmBoardDecription') + ': ' + name}
                    onConfirm={()=>removeBoard(id)}
                    onCancel={removeModalWindow}
                />
            ),
            onClickSpaceArea: removeModalWindow
        });
    };

    let boardsElements = boardsDataArray.map((el) => {
        return {
            key: el.id,
            element: (
                <BoardItem 
                    key={el.id} name={el.name} 
                    boardId={el.id} 
                    boardIdLocalizedText={localize('boardList.boardId')}
                    onDelete={()=>onDelete(el.id, el.name)}
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
    setModalWindow,
    removeModalWindow,
    addNewBoard,
    removeBoard
};

export default compose(
    withLocalizationService,
    connect(mapStoreToProps, mapDispatchToProps)
)(Controller);
