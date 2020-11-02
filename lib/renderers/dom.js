import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import StateApi from 'state-api';
export default App;

/* We need access to data here, so no empty data sending
const initialData = {
    articles: {},
    authors: {}
};
*/
const store = new StateApi(window.initialData);

//Window.initialData was sent by the server
ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);