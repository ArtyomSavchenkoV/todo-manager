import React, { Component } from 'react'

import Layout from './views/layout';
import ShowingFormButton from './views/showing-form-button';


class Controller extends Component {

    render() {
        const showingFormButton = <ShowingFormButton />;

        return (
            <Layout showingFormButton={showingFormButton} />
        );
    }
};


export default Controller;
