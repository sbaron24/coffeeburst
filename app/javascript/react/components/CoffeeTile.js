import React from 'react'

const CoffeeTile = (props) => {
  return(
    <a href={`coffees/${props.id}`}>
      <div className='coffee-tile'>

        <img src={props.image_url}/>

        <div className='details'>
          <h6>{props.name}</h6>
          <p>{props.roaster}</p>
          <p>{props.country}</p>
          <p className='roast'>{props.roast}</p>
        </div>

      </div>
    </a>
  )
}

export default CoffeeTile
