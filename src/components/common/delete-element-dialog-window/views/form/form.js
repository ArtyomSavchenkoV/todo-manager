import React from 'react';

import './form.scss';


export default ({
    descriptionLocalizedText
}) => {

    return (
        <div className="form">
            <div className="description">
                {descriptionLocalizedText}
            </div>          
        </div>
    );
};
