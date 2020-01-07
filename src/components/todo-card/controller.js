import React from 'react';

import Layout from './views/layout';
import CardState from './views/card-state';


const Controller = () => {

    const cardState = <CardState cardState="" />

    return (
        <Layout 
            cardState={cardState}
            title={'##title'}
            content={'##content'}
            date={'##date'}
            buttons={'##buttons'}
        />
    );
};


export default Controller;

/*
id: 1

name: "444"
description: "55"
state: "NEW"
date: 1578336033321

buttons:
delete,
edit,
move
*/
