import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';


const Header = () => {

    return (
        <div className="header">
            <Link to="/">
                <button className="come-to-back-button btn btn-success">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </button>
            </Link>
        </div>
    );
};


export default Header;
