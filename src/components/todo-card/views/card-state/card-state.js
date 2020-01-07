import React from 'react';

import './card-state';


export default ({
    cardState
}) => {
    let classStateIcon = 'fa-ban';
    switch (cardState) {
        case 'NEW': {
            classStateIcon = 'fa-asterisk';
            break;
        }
        case 'IN_PROGRESS': {
            classStateIcon = 'fa-spinner';
            break;
        }
        case 'FINISHED': {
            classStateIcon = 'fa-check';
            break;
        }
        case 'CANCELLED': {
            classStateIcon = 'fa-times';
            break;
        }
        default: {}
    }

    return (
        <div className="card-state">
            <i className={`fa ${classStateIcon}`} aria-hidden="true"></i>
        </div>
    );
};
