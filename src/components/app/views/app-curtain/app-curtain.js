import React from 'react';

import './app-curtain.scss';


const AppCurtain = ({ 
    children,
    onClick
}) => {
    
    return (
        <div className="app-curtain">
            <div className="app-curtain-button" onClick={onClick}>
            </div>
            <div className="app-curtain-children">
                {children}
            </div>
        </div>
    );
};


export default AppCurtain;
