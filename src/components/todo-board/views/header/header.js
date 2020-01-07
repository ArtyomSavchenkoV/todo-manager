import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';


const Header = ({
    boardName
}) => {

    return (
        <div className="header">
            <div className="buttons">
                <Link to="/">
                    <button className="come-to-back-button btn btn-success">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                </Link>
            </div>
            <div className="title">
                {boardName}
            </div>
        </div>
    );
};


export default Header;
