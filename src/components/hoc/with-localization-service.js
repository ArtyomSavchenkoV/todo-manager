import React from 'react';
import { LocalizationServiceConsumer } from "../contexts/localization-service-context";

/**
 * This function wraps the view component for handling the server interaction
 * over this component.
 *
 * @param {Object} Reducer actions.
 * @param {Component} View component.
 *
 * @returns The component wrapped into the server functions.
 * */
const withLocalization = (Component) => {
    return (props) => {
        return (
            <LocalizationServiceConsumer>
                {
                    (LocalizationService) => {
                        return (
                            <Component
								 {...props}
                                 LocalizationService={LocalizationService}
								 localize={LocalizationService.localize}
                            />
                        )
                    }
                }
            </LocalizationServiceConsumer>
        );
    }
};

export default withLocalization;
