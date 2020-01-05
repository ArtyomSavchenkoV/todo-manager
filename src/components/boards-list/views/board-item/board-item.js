import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/board/${boardId}`}>
                <div className="button">
                    <div className="board-name">
                        {name}
                    </div>
                    <div className="board-id">
                        {boardIdLocalizedText}: {boardId}
                    </div>
                </div>
            </Link>
        </div>
        
    );
};


export default BoardItem;
