import React from 'react';
import CoffeeTile from '../components/CoffeeTile'

const SearchResultsContainer = (props) => {

  let coffeeTiles = props.coffees.map(coffee => {
    return(
      <CoffeeTile
      key={coffee.id}
      id={coffee.id}
      name={coffee.name}
      roaster={coffee.roaster}
      country={coffee.country}
      roast={coffee.roast}
      image_url={coffee.image_url}
      />
    )
  })

  return(
    <div className='results-container'>
      {coffeeTiles}
    </div>
  )
}

export default SearchResultsContainer;
