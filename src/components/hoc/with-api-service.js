import React from 'react';
import { ApiServiceConsumer } from "../contexts/api-service-context";

/**
 * This function wraps the view component for handling the server interaction
 * over this component.
 *
 * @param {Object} Reducer actions.
 * @param {Component} View component.
 *
 * @returns The component wrapped into the server functions.
 * */
const withApiService = (Component) => {
    return (props) => {
        return (
            <ApiServiceConsumer>
                {
                    (ApiService) => {
                        return (
                            <Component
								 {...props}
                                 ApiService={ApiService}
                            />
                        )
                    }
                }
            </ApiServiceConsumer>
        );
    }
};

export default withApiService;
