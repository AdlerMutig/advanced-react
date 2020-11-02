import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StateApi from 'state-api';
import axios from 'axios';
import App from 'components/App';
import config from 'config';

const serverRender = async () => {
    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new StateApi(resp.data);
    /* Deleted for better state management
    const initialData = {
        articles: api.getArticles(),
        authors: api.getAuthors()
    };*/

    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App store={store}/>
        ),
        initialData: resp.data,
    };
};

export default serverRender;