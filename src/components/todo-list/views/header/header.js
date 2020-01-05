import React from 'react';

import './header.scss';


const Header = ({
    title,
    onDelete
}) => {

    return (
        <div className="header">
            <div className="title">
                {title}
            </div>
            <div className="buttons">
                <div className="delete" onClick={onDelete}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
};


export default Header;
