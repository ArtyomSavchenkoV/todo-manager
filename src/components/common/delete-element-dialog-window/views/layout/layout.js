import React from 'react';

import './layout.scss';


export default ({
    children
}) => {
    return (
        <div className="delete-element-dialog-window  col-sm-10 col-md-8 col-lg-6">
            {children}
        </div>
    );
};
