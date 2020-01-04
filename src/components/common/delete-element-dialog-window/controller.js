import React from 'react';
import { withLocalizationService } from '../../hoc';

import DeleteElementDialogWindow from './views/delete-element-dialog-window';


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
    
    return (
        <DeleteElementDialogWindow 
            titleLocalizedText={localize('deleting')}
            descriptionLocalizedText={descriptionLocalizedText}
            confirmLocalizedText={localize('confirm')}
            cancelLocalizedText={localize('cancel')}
            onConfirm={onConfirmWithClose}
            onCancel={onCancel}
        />
    );
};


export default withLocalizationService(Controller);
