import React, { Component } from 'react';

import Layout from './views/layout';
import ShowingFormButton from './views/showing-form-button';
import Form from './views/form';


class Controller extends Component {
    constructor() {
        super();
        this.state = {
            isFormShowed: false
        };
    }

    showForm = () => {
        this.setState({isFormShowed: true});
        console.log('showForm');
    }

    render() {
        const {
            isFormShowed
        } = this.state;  

        const showingFormButton = !isFormShowed ? <ShowingFormButton onClick={this.showForm}/> : null;
        const form = isFormShowed ? <Form /> : null;

        return (
            <Layout 
                isFormShowed={isFormShowed}
                showingFormButton={showingFormButton}
                form={form}
            />
        );
    }
};


export default Controller;
