import React from 'react'

const DescriptionTile = (props) => {

  let color = props.color
  let className = `${props.selected} description-tile`

  return (
    <div id={props.id} onClick={props.handleClick} className={className} style={{backgroundColor: color}}>
      {props.name}
    </div>
  )
}

export default DescriptionTile
