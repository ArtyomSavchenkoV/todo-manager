import React from 'react';

import './form.scss';


const Form = () => {

    return (
        <div className="form">
            <div className="fields">
                <div className="field">
                    <div className="title">
                        ##Name
                    </div>
                    <div className="input">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div className="button confirm">
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <div className="button unconfirm">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
};


export default Form;
