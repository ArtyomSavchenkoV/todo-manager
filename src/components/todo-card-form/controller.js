import React, { Component } from 'react';
import { withLocalizationService } from '../hoc';
import {
    itemNameValidator,
    itemDescriptionValidator,
    cardStateValidator
} from '../../utils/validators';

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


    validateField = ({ field, value }) => {
        switch (field) {
            case 'name': {
                return itemNameValidator(value)
            }
            case 'description': {
                return itemDescriptionValidator(value)
            }
            case 'state': {
                return cardStateValidator(value)
            }
            default: {
                return false
            }
        }
    }


    /*
    *   Check `state.isValuesValid` for valid all values.
    */
    checkIsValuesValid = () => {
        const {
            isValuesValid
        } = this.state;

        for (let key in isValuesValid) {
            if (isValuesValid[key] !== true) {
                return false;
            }
        }

        return true;
    }


    onEditField = ({ field, value }) => {
        let newValue = value;
        // To limit the length of the name
        if (field === 'name') {
            newValue = value.substr(0, 32);
        }

        this.setState((state) => { 
            return {
                ...state,
                values: {
                    ...state.values,
                    [field]: newValue 
                },
                isValuesValid: {
                    ...state.isValuesValid,
                    [field]: this.validateField({ field, value: newValue }) 
                }
            };
        });
    }


    componentDidMount () {
        const {
            values
        } = this.props;

        /*
        *   Set initial values if this was received. 
        */
        if (typeof values === 'object') {
            let isValuesValid = {};
            for (let key in values) {
                const value = values[key];
                isValuesValid[key] = this.validateField({ field: key, value });
            }
            
            this.setState((state) => { 
                return {
                    ...state,
                    values: {
                        ...values
                    },
                    isValuesValid: {
                        ...isValuesValid 
                    }
                };
            });
        }
    }


    onConfirm = () => {
        if (this.checkIsValuesValid()) {
            const {
                onConfirm
            } = this.props;
            const {
                values
            } = this.state;
            onConfirm(values);
        }
    }


    render() {
        const {
            titleLocalizedText,
    
            onCancel,

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

                onConfirm={this.onConfirm}
                onCancel={onCancel}
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
