import React from 'react';

import './buttons.scss';


export default ({
    confirmLocalizedText,
    cancelLocalizedText,

    onConfirm,
    onCancel
}) => {

    return (
        <div className="buttons">
            <div className="col-4 float-left">
                <button 
                    className="btn btn-outline-secondary" 
                    onClick={onConfirm}
                >
                    {confirmLocalizedText}
                </button>
            </div>
            <div className="col-8 float-left">
                <button 
                    className="btn btn-success" 
                    onClick={onCancel}
                >
                    {cancelLocalizedText}
                </button>
            </div>
        </div>
    );
};
