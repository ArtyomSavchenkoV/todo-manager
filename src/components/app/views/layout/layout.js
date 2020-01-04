import React from 'react';

import './layout.scss';

const Layout = ({
    developerTools,
    header,
    workSpace
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
            <div className="work-space-container">
                {workSpace}
            </div>
        </div>
    );
};

export default Layout;
