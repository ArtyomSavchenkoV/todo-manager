import React from 'react';

import './form.scss';


export default ({
    cardNameLocalizedText,
    descriptionLocalizedText,
    stateLocalizedText,
}) => {

    return (
        <div className="form">
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
                            ##ta
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
    );
};
