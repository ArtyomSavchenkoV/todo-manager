import React from 'react';

import Layout from './views/layout';
import Header from './views/header';
import NewListForm from './new-list-form';


const Controller = () => {

    const header = <Header />;

    let todoListsElements = [];
    todoListsElements.push({
        element: <NewListForm onConfirm={()=>{}}/>,
        key: 'new-list-form'
    });

    return (
        <Layout header={header} todoListsElements={todoListsElements}/>
    );
};


export default Controller;
