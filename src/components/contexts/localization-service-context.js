import React from 'react';

/**
 * Place the websocket object into the react app context.
 * */
const {
    Provider: LocalizationServiceProvider,
    Consumer: LocalizationServiceConsumer
} = React.createContext();

export { LocalizationServiceProvider, LocalizationServiceConsumer }
