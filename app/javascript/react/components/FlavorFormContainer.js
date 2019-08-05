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
      <div>
        <div className='flavor-form-container'>
          <Coffeeburst handleFlavorSelection={props.handleFlavorSelection}/>
          <div className='flavor-tile-container'>
            {flavorTiles}
          </div>
        </div>
      </div>
    )
}

export default FlavorFormContainer;
