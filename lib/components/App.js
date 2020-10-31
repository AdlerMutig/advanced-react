import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData.json';
import ArticleList from './ArticleList';

const api = new DataApi(data);


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };
    }

    // Look up author should be defined here and called in Article
    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId], 
    }
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />

        );
    }
}

export default App;