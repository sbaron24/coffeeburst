import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      const newSearchString = event.target.value
      this.setState({ searchString: newSearchString })
    }

    handleSubmit(event) {
      event.preventDefault()
      let payload = this.state.searchString
      this.props.handleFetch(payload);
    }

  render() {
    return(
      <div className='search-bar'>
        <form onSubmit={this.handleSubmit}>
        <label>What are you drinking?</label>
          <input
            placeholder="Enter a coffee, roaster, country of origin, or roast level"
            type='text'
            name='searchString'
            value={this.state.searchString}
            onChange={this.handleChange}
          />

          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default SearchBar;
