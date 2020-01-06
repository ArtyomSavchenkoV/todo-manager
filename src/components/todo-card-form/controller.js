import React, { Component } from 'react';
import { withLocalizationService } from '../hoc';

import DialogWindowLayout from '../common/dialog-window-layout';
import Layout from './views/layout';
import Form from './views/form';
import Image from './views/image';
import Buttons from './views/buttons';


class Controller extends Component {
    constructor () {
        super();

        this.state = {
            values: {
                name: '',
                description: '',
                state: 'NEW'
            },
            isValuesValid: {    
                name: false,
                description: false,
                state: true
            }
        };     
    }


    onEditField = ({ field, value }) => {
        this.setState((state) => { 
            return {
                ...state,
                values: {
                    ...state.values,
                    [field]: value 
                },
                isValuesValid: {
                    ...state.isValuesValid,
                    [field]: true 
                }
            };
        });
    }


    render() {
        const {
            titleLocalizedText,

            localize
        } = this.props;

        const {
            values,
            isValuesValid
        } = this.state;


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
        
                values={values}
                isValuesValid={isValuesValid}

                onEditField={this.onEditField}
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
