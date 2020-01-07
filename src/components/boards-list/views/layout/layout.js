import React from 'react';

import './layout.scss';


const Layout = ({
    boardsElements: boardsElementsArray
}) => {

    return (
        <div className="boards-list">
            {boardsElements(boardsElementsArray)}
        </div>
    );
};


const boardsElements = (boardsElementsArray) => {
    return boardsElementsArray.map((el) => {
        return (
            <div key={el.key} className="board-item-container col-lg-2 col-md-3 col-sm-4 col-xs-6 float-left">
                {el.element}
            </div>
        );
    });
};


export default Layout;
