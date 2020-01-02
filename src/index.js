import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import LocalizationService from './services/localization-service';
import DummyApiService from './services/dummy-api-service';

import ApiService from './services/api-service';

import { LocalizationServiceProvider } from "./components/contexts/localization-service-context";
import { ApiServiceProvider } from "./components/contexts/api-service-context";

import App from './components/app';
import ErrorBoundary from './components/common/error-boundary';

import ru from './resources/localizations/ru.json';

const localizationService = new LocalizationService();
const apiService = process.env.NODE_ENV === 'production' ? new ApiService() : new DummyApiService();

localizationService.setLanguage(ru);

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <LocalizationServiceProvider value={localizationService}>
                <ApiServiceProvider value={apiService}>
                    <App />
                </ApiServiceProvider>
            </LocalizationServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
