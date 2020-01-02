import React from 'react';

/**
 * Place the websocket object into the react app context.
 * */
const {
    Provider: ApiServiceProvider,
    Consumer: ApiServiceConsumer
} = React.createContext();

export { ApiServiceProvider, ApiServiceConsumer }
