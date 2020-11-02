import React from 'react';
import PropTypes from 'prop-types';

//Changed from a function component to a class component to manage state
const storeProvider = (extraProps) => ((Component) => {
    return class extends React.Component{
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object,
        };
        render() {
            return <Component
            {...this.props}
            {...extraProps(this.context.store, this.props)}
            store={this.context.store} />;
        }
    };
}); 

export default storeProvider;