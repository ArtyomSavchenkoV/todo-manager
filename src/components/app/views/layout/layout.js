import React from 'react';

import './layout.scss';

const Layout = ({
    developerTools = null
}) => {
    const developerToolsContainer = developerTools !== null ? (
        <div className="developer-tools-container">
            {developerTools}
        </div>
    ) : null;

    return (
        <div className="app">
            {developerToolsContainer}
        </div>
    );
};

export default Layout;
