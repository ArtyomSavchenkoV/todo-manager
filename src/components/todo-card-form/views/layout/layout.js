import React from 'react';

import './layout.scss';


export default ({
    titleLocalizedText,
    cardNameLocalizedText,
    descriptionLocalizedText,
    stateLocalizedText,

    confirmLocalizedText,
    cancelLocalizedText,

    onConfirm,
    onCancel
}) => {

    return (
        <div className="todo-card-form col-sm-10 col-md-8 col-lg-6">
            <div className="form col-sm-8 float-left">
                <div className="window-title">
                    {titleLocalizedText}
                </div>
                <div className="fields">
                    <div className="field">
                        <div className="name col-sm-6 float-left">
                            {cardNameLocalizedText}
                        </div>
                        <div className="value col-sm-6 float-left">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="field container-fluid">
                        <div className="name">
                            {descriptionLocalizedText}
                        </div>
                        <div className="value">
                            <textarea>
                                #ta
                            </textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="name col-sm-6 float-left">
                            {stateLocalizedText}
                        </div>
                        <div className="value col-sm-6 float-left">
                            ##value
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="icon col-sm-4 float-left d-none d-sm-block">
                <i className="fa fa-th-list" aria-hidden="true"></i>
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
