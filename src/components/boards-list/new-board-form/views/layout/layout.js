import React from 'react';

import './layout.scss';


const Layout = ({
    showingFormButton
}) => {

    return (
        <div className="new-board-form">
            <div className="showing-form-button-container">
                {showingFormButton}
            </div>
        </div>
    );
};


export default Layout;
