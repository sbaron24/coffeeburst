import React from 'react'

const RatingTile = (props) => {

  let className = `${props.selected} description-tile`

  return (
    <div id={props.rating} name={'selectedRatingId'} className={className} style={{backgroundColor: '#d7c7ff'}} onClick={props.handleClick}>
      {props.rating}
      <p>{props.text}</p>
    </div>
  )
}

export default RatingTile
