import React from 'react';

import Layout from './views/layout';
import Header from './views/header';


const Controller = () => {

    const header = <Header />;

    return (
        <Layout header={header}/>
    );
};


export default Controller;
