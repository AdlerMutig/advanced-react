import { checkPropTypes } from 'prop-types';
import React from 'react';
//import DataApi from 'state-api'; preloaded by server
import ArticleList from './ArticleList';
//import {data} from '../testData.json';
// const api = new DataApi(data);
//import axios from 'axios';
import PropTypes from 'prop-types';


class App extends React.Component {

    //Need context type
    static childContextTypes = {
        store: PropTypes.object,
    };

    //Anything recovered from this function is the context object
    //Globally available to any component
    getChildContext() {
        return{
            store: this.props.store,
        };
    }
    state = this.props.store.getState();
    /* We should re fetch data client side
    async componentDidMount() {
        const resp = await axios.get('/data');
        const api = new DataApi(resp.data);
        this.setState(() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }));
    }
    */

    // Look up author should be defined here and called in Article EDIT. Task done by API
    /*articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId], 
    }*/
    render() {
        //debugger;
        return (
            <ArticleList
                articles={this.state.articles}
                store={this.props.store}
            />

        );
    }
}

export default App;