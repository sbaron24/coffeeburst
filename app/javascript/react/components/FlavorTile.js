import React from 'react'

const FlavorTile = (props) => {

  let color = props.color

  return (
    <div className="flavor-tile" style={{backgroundColor: color}}>
      {props.name}
    </div>
  )
}

export default FlavorTile
