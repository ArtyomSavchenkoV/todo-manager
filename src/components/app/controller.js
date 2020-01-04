import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import DeveloperTools from '../developer-tools';
import Header from '../app-header';
import WorkSpace from '../work-space';

import Layout from './views/layout';
import AppCurtain from './views/app-curtain';


const App = ({
    appState,
    localize
}) => {
    const {
        isDeveloping,
        modalWindow
    } = appState;
    
    const developerTools = isDeveloping ? <DeveloperTools /> : null;
    const header = <Header />;
    const workSpace = <WorkSpace />;
    const appCurtain = modalWindow === null ? null : (
        <AppCurtain onClick={modalWindow.onClickSpaceArea}>
            {modalWindow.component}
        </AppCurtain>
    );
    
    return (
        <React.Fragment>
            <Layout 
                developerTools={developerTools} 
                header={header}
                workSpace={workSpace}
            />
            {appCurtain}
        </React.Fragment>
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
