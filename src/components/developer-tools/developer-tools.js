import React from 'react';
import { connect } from 'react-redux';

import './developer-tools.scss';


const DeveloperTools = ({ store }) => {
    const showStore = () => {
        console.log(store);
    };
    
    return (
        <div className="developer-tools">
            <button onClick={showStore}>##Show Store</button>
        </div>
    );
};


const mapStoreToProps = (store) => {
    return {
        store
    };
};

export default connect(mapStoreToProps)(DeveloperTools);
