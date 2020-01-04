import React from 'react';

import './delete-element-dialog-window.scss';


const DeleteElementDialogWindow = ({
    titleLocalizedText,
    descriptionLocalizedText,
    confirmLocalizedText,
    cancelLocalizedText,
    onConfirm,
    onCancel
}) => {
    return (
        <div className="delete-element-dialog-window col-sm-10 col-md-8 col-lg-6">
            <div className="form col-sm-8 float-left">
                <div className="title">
                    {titleLocalizedText}
                </div>
                <div className="description">
                    {descriptionLocalizedText}
                </div>
                
            </div>
            <div className="icon col-sm-4 float-left d-none d-sm-block">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
            <div className="buttons col-sm-8">
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
        </div>
    );
};


export default DeleteElementDialogWindow;
