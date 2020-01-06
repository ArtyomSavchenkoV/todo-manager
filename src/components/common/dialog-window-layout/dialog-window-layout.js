import React from 'react';

import './dialog-window-layout.scss';


export default ({
    title,
    form,
    image,
    buttons
}) => {
    
    return (
        <div className="dialog-window-layout">
            <div className="form-container col-sm-8 float-left">
                <div className="title-container">
                    {title}
                </div>
                {form}                
            </div>
            <div className="image-container col-sm-4 float-left d-none d-sm-block">
                {image}
            </div>
            <div className="buttons-container col-sm-8">
                {buttons}
            </div>
        </div>
    );
};
