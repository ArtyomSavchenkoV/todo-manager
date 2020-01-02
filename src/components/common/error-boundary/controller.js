import React, { Component } from 'react';
import ErrorBoundaryIndicator from './views/error-boundary-indicator';

export default class extends Component {
    constructor() {
        super();

        this.state = {
            error: false
        }
    }

	/**
	 * Error catching.
	 */
    componentDidCatch() {
        this.setState({error: true})
    }

	/**
	 * Display an error or flawless application content.
	 */
    render(){
        if (this.state.error) return <ErrorBoundaryIndicator />;
        return this.props.children;
    }
}
