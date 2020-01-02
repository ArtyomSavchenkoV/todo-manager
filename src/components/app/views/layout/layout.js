import React from 'react';

import './layout.css';

const Layout = ({
    content
}) => {

    return (
        <div className="app">
            <div className="content-container">
                {content}
            </div>
        </div>
    );
};

export default Layout;
