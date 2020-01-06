import React from 'react';

import './form.scss';


export default ({
    cardNameLocalizedText,
    descriptionLocalizedText,
    stateLocalizedText,

    values,

    onEditField
}) => {
    const {
        name,
        description,
        state
    } = values;

    return (
        <div className="form">
            <div className="fields">
                <div className="field">
                    <div className="name col-sm-6 float-left">
                        {cardNameLocalizedText}
                    </div>
                    <div className="value col-sm-6 float-left">
                        <input type="text" value={name}/>
                    </div>
                </div>
                <div className="field container-fluid">
                    <div className="name">
                        {descriptionLocalizedText}
                    </div>
                    <div className="value">
                        <textarea value={description} />
                    </div>
                </div>
                <div className="field">
                    <div className="name col-sm-6 float-left">
                        {stateLocalizedText}
                    </div>
                    <div className="value col-sm-6 float-left">
                        {state}
                    </div>
                </div>
            </div>         
        </div>
    );
};
