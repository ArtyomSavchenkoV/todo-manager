import React from 'react';

import './layout.scss';


const Layout = ({
    cardState,
    title,
    content,
    date,
    buttons,

    onDelete
}) => {

    return (
        <div className="todo-card">
            <div className="header">
                <div className="card-state-container">
                    {cardState}
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="delete-button" onClick={onDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
            <div className="content-container">
                {content}
            </div>
            <div className="footer">
                <div className="date-container">
                    {date}
                </div>
                <div className="buttons-container">
                    {buttons}
                </div>
            </div>
        </div>
    );
};


export default Layout;
