import React from 'react';
import PropTypes from 'prop-types';

//Changed from a function component to a class component to manage state
const storeProvider = (extraProps = () => ({})) => ((Component) => {
    return class extends React.PureComponent{
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object,
        };

        //copied from the app component to fake state change
        onStoreChange = () => {
            //this.setState(this.props.store.getState()); no need to change, just signal to rerender
            if (this.subscriptionId) {
                this.forceUpdate();
            }
        }
        componentDidMount() {
            this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
        }
    
        componentWillUnmount() {
            this.context.store.unsubscribe(this.subscriptionId);
            this.subscriptionId = null;
        }

        render() {
            return <Component
            {...this.props}
            {...extraProps(this.context.store, this.props)}
            store={this.context.store} />;
        }
    };
}); 

export default storeProvider;