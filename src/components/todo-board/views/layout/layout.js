import React from 'react';

import './layout.scss';


const Layout = ({
    header,
    todoListsElements: todoListsElementsArray
}) => {
    const todoListsElements = todoListsElementsArray.map((el) => {
        return (
            <div key={el.key} className="list-item-container">
                {el.element}
            </div>
        );
    });

    return (
        <div className="todo-board">
            <div className="header-container">
                {header}
            </div>
            <div className="lists-container">
                {todoListsElements}
            </div>
        </div>
    );
};


export default Layout;
