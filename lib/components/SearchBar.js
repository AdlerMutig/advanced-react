import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    };

    doSearch = debounce(() => {
        //console.log(this.state.searchTerm); // we assume the function will come in props
        this.props.doSearch(this.state.searchTerm);
    }, 300) //debounce after 300 ms

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value}, ()=>{
            this.doSearch();

        });
    }
    render() {
        return (
            <input
            ref={(input) => this.searchInput = input}
            type="search"
            placeholder="Enter search term"
            value={this.state.searchTerm}
            onChange={this.handleSearch}
            />
        );
    }
}

export default SearchBar;