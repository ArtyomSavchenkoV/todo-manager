import React from 'react';
import { connect } from 'react-redux';

import './developer-tools.scss';


const DeveloperTools = ({ store }) => {
    
    return (
        <div className="developer-tools">
            <button >##Show Store</button>
        </div>
    );
};


const mapStoreToProps = (store) => {
    return {
        store
    };
};

export default connect(mapStoreToProps)(DeveloperTools);
