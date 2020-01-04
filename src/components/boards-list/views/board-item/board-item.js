import React from 'react';

import './board-item.scss';


const BoardItem = ({
    name,
    boardId,
    boardIdLocalizedText,

    onDelete
}) => {
    return (
        <div className="board-item">
            <div className="delete-button" onClick={onDelete}>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
            <div className="board-name">
                {name}
            </div>
            <div className="board-id">
                {boardIdLocalizedText}: {boardId}
            </div>
        </div>
    );
};


export default BoardItem;
