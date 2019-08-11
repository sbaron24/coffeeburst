import React from 'react'
import importedData from './body_data.json'
import BodyTile from './BodyTile'

const data = {importedData}


const BodyFormContainer = (props) => {

  let lightBodies = data.importedData[0].children
  let lightTiles = lightBodies.map(body => {
    let selected
    if (body.id == props.selectedBodyId) {
      selected ='selected'
    }

    return (
      <BodyTile
        key={body.id}
        id={body.id}
        name={body.name}
        color={body.hex}
        handleClick={props.handleBodySelection}
        selected={selected}
      />
    )
  })

  let mediumBodies = data.importedData[1].children
  let mediumTiles = mediumBodies.map(body => {
    let selected
    if (body.id == props.selectedBodyId) {
      selected ='selected'
    }

    return (
      <BodyTile
        key={body.id}
        id={body.id}
        name={body.name}
        color={body.hex}
        handleClick={props.handleBodySelection}
        selected={selected}
      />
    )
  })

  let heavyBodies = data.importedData[2].children
  let heavyTiles = heavyBodies.map(body => {
    let selected
    if (body.id == props.selectedBodyId) {
      selected ='selected'
    }

    return (
      <BodyTile
        key={body.id}
        id={body.id}
        name={body.name}
        color={body.hex}
        handleClick={props.handleBodySelection}
        selected={selected}
      />
    )
  })

  return(
    <div className='form-container'>
    <h3>What kind of <strong>body</strong> does this coffee have?</h3>
    <div className='form'>
      {lightTiles}
      {mediumTiles}
      {heavyTiles}
    </div>
    </div>
  )
}

export default BodyFormContainer
