import React, { Component } from 'react';
import { withLocalizationService } from '../../hoc';

import Layout from './views/layout';
import ShowingFormButton from './views/showing-form-button';
import Form from './views/form';


class Controller extends Component {
    constructor() {
        super();
        this.state = {
            isFormShowed: false,
            nameFieldValue: '',
            isNameFieldValid: true
        };
    }


    showForm = () => {
        this.setState({isFormShowed: true});
    }


    closeForm = () => {
        this.setState({isFormShowed: false});
    }


    editField = (value) => {
        this.setState({nameFieldValue: value});
    }


    onConfirm = () => {
        const {
            onConfirm
        } = this.props;
        const {
            nameFieldValue,
            isNameFieldValid
        } = this.state; 
        if (isNameFieldValid) {
            onConfirm(nameFieldValue);
        }
    }


    render() {
        const {
            isFormShowed,
            nameFieldValue,
            isNameFieldValid
        } = this.state;  

        const {
            localize
        } = this.props;

        const showingFormButton = !isFormShowed ? (
            <ShowingFormButton onClick={this.showForm}/>
        ) : null;
        const form = isFormShowed ? (
            <Form 
                nameFieldLabel={localize('boardsList.fieldName')}
                nameFieldValue={nameFieldValue}
                isNameFieldValid={isNameFieldValid}
                onConfirm={this.onConfirm}
                onClose={this.closeForm}
                onEditField={this.editField}
            />
        ) : null;

        return (
            <Layout 
                isFormShowed={isFormShowed}
                showingFormButton={showingFormButton}
                form={form}
            />
        );
    }
};


export default withLocalizationService(Controller);
