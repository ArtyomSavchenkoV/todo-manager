import React from 'react';
import { withLocalizationService } from '../../hoc';

import DialogWindowLayout from '../dialog-window-layout';
import Layout from './views/layout';
import Form from './views/form';
import Image from './views/image';
import Buttons from './views/buttons';

const Controller = ({
    descriptionLocalizedText,
    onConfirm,
    onCancel,

    localize
}) => {
    const onConfirmWithClose = () => {
        onConfirm();
        onCancel();
    }

    const form = <Form descriptionLocalizedText={descriptionLocalizedText} />;
    const image = <Image />;
    const buttons = (
        <Buttons
            confirmLocalizedText={localize('confirm')}
            cancelLocalizedText={localize('cancel')}

            onConfirm={onConfirmWithClose}
            onCancel={onCancel}
        />
    );
    const dialogWindowLayout = (
        <DialogWindowLayout 
            title={localize('deleting')}
            form={form}
            image={image}
            buttons={buttons}
        />
    );
    
    return (
        <Layout> 
            {dialogWindowLayout}
        </Layout>
    );
};


export default withLocalizationService(Controller);
