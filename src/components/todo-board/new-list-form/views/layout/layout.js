import React from 'react';

import './layout.scss';


const Layout = ({
    isFormShowed,
    showingFormButton,
    form
}) => {

    const content = isFormShowed ? (
            <div className="form-container">
                {form}
            </div>
        ) : (
            <div className="showing-form-button-container">
                {showingFormButton}
            </div>
        );

    return (
        <div className="new-list-form">
            {content}
        </div>
    );
};


export default Layout;
