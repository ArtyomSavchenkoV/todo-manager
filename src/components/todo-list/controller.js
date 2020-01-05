import React from 'react';

import Layout from './views/layout';
import Header from './views/header';


const Controller = ({
    boardId,
    listId
}) => {

    const header = <Header title="##title" />

    return (
        <Layout header={header} cardsElements={[]}/>    
    );
};


export default Controller;
