import React from 'react';

import './board-item.scss';


const BoardItem = ({
    name,
    boardId,
    boardIdLocalizedText
}) => {
    return (
        <div className="board-item">
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
