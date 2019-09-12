import React from 'react'
import RatingTile from './RatingTile'

const RatingFormContainer = (props) => {

  let ratings = [
    'Never again!',
    "Indifferent",
    "Pretty good",
    "Recommend to a friend",
    "New favorite!"
  ]

  let ratingTiles = ratings.map((text, index) => {
    let rating = index + 1
    let selected
    if (rating == props.selectedRating) {
      selected ='selected'
    }


    return (
      <RatingTile
        key={rating}
        rating={rating}
        text={text}
        handleClick={props.handleRatingSelection}
        selected={selected}
      />
    )
  })

  return(
    <div className='form-container'>
      <h3>What's your <strong>rating</strong> for this coffee?</h3>
      <div className='form'>
        {ratingTiles}
      </div>
    </div>
  )
}

export default RatingFormContainer
