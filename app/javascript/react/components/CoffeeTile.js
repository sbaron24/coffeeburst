import React from 'react'

const CoffeeTile = (props) => {

  return(
    <div className='coffee-tile'>

      <div className='image'>
      </div>

      <div className='details'>
        <p>{props.name} {props.roaster}</p>
        <p><strong>{props.country}</strong></p>
        <p className='roast'>{props.roast}</p>
      </div>

    </div>
  )
}

export default CoffeeTile
