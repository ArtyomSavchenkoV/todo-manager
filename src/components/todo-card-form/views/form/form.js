import React from 'react';

import './form.scss';


export default ({
    cardNameLocalizedText,
    descriptionLocalizedText,
    stateLocalizedText,
    stateLocalizedValuesText,

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
                        {cardNameLocalizedText}:
                    </div>
                    <div className="value col-sm-6 float-left">
                        <input type="text" value={name} onChange={(event)=>{onEditField({field: 'name', value: event.target.value})}} />
                    </div>
                </div>
                <div className="field container-fluid">
                    <div className="name">
                        {descriptionLocalizedText}:
                    </div>
                    <div className="value">
                        <textarea value={description} onChange={(event)=>{onEditField({field: 'description', value: event.target.value})}} />
                    </div>
                </div>
                <div className="field">
                    <div className="name col-sm-6 float-left">
                        {stateLocalizedText}:
                    </div>
                    <div className="value col-sm-6 float-left">
                        <select value={state} onChange={(event)=>{onEditField({field: 'state', value: event.target.value})}} >
                            <option value="NEW">{stateLocalizedValuesText.newCard}</option>
                            <option value="IN_PROGRESS">{stateLocalizedValuesText.inProgress}</option>
                            <option value="FINISHED">{stateLocalizedValuesText.finished}</option>
                            <option value="CANSELLED">{stateLocalizedValuesText.canselled}</option>
                        </select>
                    </div>
                </div>
            </div>         
        </div>
    );
};
