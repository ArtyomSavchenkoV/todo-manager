import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import Spinner from '../common/spinner';

import Layout from './views/layout';


const App = ({
    store,
    localize
}) => {
    
    const content = <Spinner />;
    
    return (
        <Layout content={content} />
    );
};



const mapStoreToProps = (store) => {
    return {
        store
    }
};

export default compose(
    withLocalizationService,
    connect(mapStoreToProps)
)(App);
