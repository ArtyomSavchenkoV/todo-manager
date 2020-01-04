import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import DeveloperTools from '../developer-tools';
import Header from '../header';
import WorkSpace from '../work-space';

import Layout from './views/layout';
import AppCurtain from './views/app-curtain';


const App = ({
    appState,
    localize
}) => {
    
    const developerTools = appState.isDeveloping ? <DeveloperTools /> : null;
    const header = <Header />;
    const workSpace = <WorkSpace />;
    //TODO: Make showing modal window when modal window is available.
    const appCurtain = null;/*(
        <AppCurtain onClick={()=>console.log('cl')}>
            <DeleteElementDialogWindow />
        </AppCurtain>
    );*/
    
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
