import { checkPropTypes } from 'prop-types';
import React from 'react';
//import DataApi from 'state-api'; preloaded by server
import ArticleList from './ArticleList';
//import {data} from '../testData.json';
// const api = new DataApi(data);
//import axios from 'axios';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';


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
    setSeacrhTerm = (searchTerm) => {
        this.setState({searchTerm});
    };
    render() {
        //debugger;
        let {articles, searchTerm} = this.state;
        if (searchTerm) {
            articles=pickBy(articles, (value)=>{
                return value.title.match(searchTerm)
                || value.body.match(searchTerm);

            });
        }
        return (
            <div>
                <SearchBar doSearch={this.setSeacrhTerm}/>
                <ArticleList
                    articles={articles}
                    store={this.props.store}
                />
            </div>
        );
    }
}

export default App;