import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import Spinner from '../common/spinner';
import DeveloperTools from '../developer-tools';

import Layout from './views/layout';


const App = ({
    appState,
    localize
}) => {
    
    const content = <Spinner />;
    const developerTools = appState.isDeveloping ? <DeveloperTools /> : null;
    
    return (
        <Layout content={content} developerTools={developerTools}/>
    );
};



const mapStoreToProps = ({ appState }) => {
    return {
        appState
    }
};

export default compose(
    withLocalizationService,
    connect(mapStoreToProps)
)(App);
