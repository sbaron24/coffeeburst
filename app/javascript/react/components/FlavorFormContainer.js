import React from 'react';
import Coffeeburst from './Coffeeburst'
import FlavorTile from './FlavorTile'

const FlavorFormContainer = (props) => {

  let flavorTiles = props.flavors.map(flavor => {

    return(
      <FlavorTile
      key={flavor.id}
      name={flavor.name}
      color={flavor.hex}
      />
    )
  })

    return(
      <div className='form-container'>
      <h3>What <strong>flavors</strong> does this coffee have?</h3>
        <div className='form'>
          <Coffeeburst handleFlavorSelection={props.handleFlavorSelection}/>
          <div className='flavor-tile-container'>
            {flavorTiles}
          </div>
        </div>
      </div>
    )
}

export default FlavorFormContainer;
