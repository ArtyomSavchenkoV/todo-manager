import React, { Component } from 'react';
import { withLocalizationService } from '../hoc';

import DialogWindowLayout from '../common/dialog-window-layout';
import Layout from './views/layout';
import Form from './views/form';
import Image from './views/image';
import Buttons from './views/buttons';


class Controller extends Component {

    render() {
        const {
            titleLocalizedText,

            localize
        } = this.props;

        const stubValues = {
            name: '##name',
            description: '##description',
            state: '##NEW'
        }

        const form = (
            <Form
                cardNameLocalizedText={localize('todoCardForm.cardNameLocalizedText')}
                descriptionLocalizedText={localize('todoCardForm.descriptionLocalizedText')}
                stateLocalizedText={localize('todoCardForm.stateLocalizedText')}
                stateLocalizedValuesText={{
                    newCard: localize('todoCard.state.newCard'),
                    inProgress: localize('todoCard.state.inProgress'),
                    finished: localize('todoCard.state.finished'),
                    canselled: localize('todoCard.state.canselled')
                }}
        
                values={stubValues}

                onEditField={()=>{}}
            />
        );
        const image = <Image />;
        const buttons = (
            <Buttons
                confirmLocalizedText={localize('confirm')}
                cancelLocalizedText={localize('cancel')}

                onConfirm={()=>{}}
                onCancel={()=>{}}
            />
        );

        return (
            <Layout>
                <DialogWindowLayout 
                    title={titleLocalizedText}
                    form={form}
                    image={image}
                    buttons={buttons}
                />
            </Layout>
        );
    };
};


export default withLocalizationService(Controller);
