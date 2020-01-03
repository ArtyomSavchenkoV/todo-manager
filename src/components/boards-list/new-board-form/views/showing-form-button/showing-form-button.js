import React from 'react';

import './showing-form-button.scss';


const ShowingFormButton = ({
    onClick
}) => {
    
    return (
        <div className="showing-form-button" onClick={onClick}>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
    );
};


export default ShowingFormButton;
