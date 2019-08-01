import React, { Component } from 'react';
import CoffeeTile from '../components/CoffeeTile'

class SearchResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    let coffeeTiles = this.props.coffees.map(coffee => {
      return(
        <CoffeeTile
          key={coffee.id}
          name={coffee.name}
          roaster={coffee.roaster}
          country={coffee.country}
          roast={coffee.roast}
        />
      )
    })
    return(
      <div className='results-container'>
        {coffeeTiles}
      </div>
    )
  }
}

export default SearchResultsContainer;
