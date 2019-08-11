import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.timer = null
    this.state = {
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      const newSearchString = event.target.value
      this.setState({ searchString: newSearchString })
      clearTimeout(this.timer)
      this.timer = setTimeout(
        function() {
          this.handleSubmit()
        }
        .bind(this),
        250
      )
    }

    handleSubmit() {
      let payload = this.state.searchString
      this.props.handleFetch(payload);
    }

  render() {
    return(
      <div className='search-bar'>
        <form>
        <label className='main-header'>What are you drinking?</label>
          <input
            placeholder="Enter a coffee, roaster, country of origin, or roast level"
            type='text'
            name='searchString'
            value={this.state.searchString}
            onChange={this.handleChange}
          />
        </form>
        <a href='coffees/new' className='button'>Add a coffee</a>
      </div>
    )
  }
}

export default SearchBar;
