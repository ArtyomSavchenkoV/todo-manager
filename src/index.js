import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import LocalizationService from './services/localization-service';

import { LocalizationServiceProvider } from "./components/contexts/localization-service-context";

import App from './components/app';
import ErrorBoundary from './components/common/error-boundary';

import ru from './resources/localizations/ru.json';

const localizationService = new LocalizationService();

localizationService.setLanguage(ru);

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <LocalizationServiceProvider value={localizationService}>
                <App />
            </LocalizationServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
