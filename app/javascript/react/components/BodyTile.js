import React from 'react'

const BodyTile = (props) => {

  let color = props.color
  let className = `${props.selected} body-tile`

  return (
    <div id={props.id} onClick={props.handleClick} className={className} style={{backgroundColor: color}}>
      {props.name}
    </div>
  )
}

export default BodyTile
