import React, { Component } from 'react';
import { withLocalizationService } from '../hoc';

import Layout from './views/layout';


class Controller extends Component {

    render() {
        const {
            localize
        } = this.props;

        return (
            <Layout
                titleLocalizedText={localize('todoCardForm.titleLocalizedText')}
                cardNameLocalizedText={localize('todoCardForm.cardNameLocalizedText')}
                descriptionLocalizedText={localize('todoCardForm.descriptionLocalizedText')}
                stateLocalizedText={localize('todoCardForm.stateLocalizedText')}

                confirmLocalizedText={localize('todoCardForm.confirmLocalizedText')}
                cancelLocalizedText={localize('todoCardForm.cancelLocalizedText')}

                onConfirm={()=>{}}
                onCancel={()=>{}}
            />
        );
    };
};


export default withLocalizationService(Controller);
