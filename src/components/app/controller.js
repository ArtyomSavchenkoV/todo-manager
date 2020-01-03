import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import DeveloperTools from '../developer-tools';
import Header from '../header';
import WorkSpace from '../work-space';

import Layout from './views/layout';


const App = ({
    appState,
    localize
}) => {
    
    const developerTools = appState.isDeveloping ? <DeveloperTools /> : null;
    const header = <Header />;
    const workSpace = <WorkSpace />;
    
    return (
        <Layout 
            developerTools={developerTools} 
            header={header}
            workSpace={workSpace}
        />
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
