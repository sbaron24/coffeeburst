import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import SearchResultsContainer from '../components/SearchResultsContainer'

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
    this.fetchResults = this.fetchResults.bind(this)
  }

  fetchResults(payload){
    const body = JSON.stringify({
      search_string: payload
    })
    fetch('/api/v1/coffees/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(results => {
      this.setState({ searchResults: results })
    })
  }


  render() {
    return(
      <div className='search-container'>
        <SearchBar handleFetch={this.fetchResults} />
        <SearchResultsContainer coffees={this.state.searchResults} />
      </div>
    )
  }
}

export default SearchContainer;
