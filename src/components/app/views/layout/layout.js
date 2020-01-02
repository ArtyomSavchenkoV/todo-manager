import React from 'react';

import './layout.scss';

const Layout = ({
    developerTools,
    header
}) => {
    const developerToolsContainer = developerTools !== null ? (
        <div className="developer-tools-container">
            {developerTools}
        </div>
    ) : null;

    return (
        <div className="app">
            {developerToolsContainer}
            <div className="header-container">
                {header}
            </div>
        </div>
    );
};

export default Layout;
