import React from 'react';

import './add-card-button.scss';


export default ({
    onClick
}) => {

    return (
        <div className="add-card-button btn btn-primary" onClick={onClick}>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
    );
};
