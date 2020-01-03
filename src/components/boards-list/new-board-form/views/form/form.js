import React from 'react';

import './form.scss';


const Form = ({
    nameFieldLabel,
    nameFieldValue,
    isNameFieldValid,
    onConfirm,
    onClose,
    onEditField
}) => {

    return (
        <div className="form">
            <div className="fields">
                <div className="field">
                    <div className="title">
                        {nameFieldLabel}
                    </div>
                    <div className="input">
                        <input type="text" value={nameFieldValue} onChange={(el) => onEditField(el.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div className="button confirm" onClick={onConfirm}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <div className="button unconfirm" onClick={onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
};


export default Form;
