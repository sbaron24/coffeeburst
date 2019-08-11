import React from 'react'
import importedData from './description_data.json'
import DescriptionTile from './DescriptionTile'

const DescriptionFormContainer = (props) => {
  const data = {importedData}

  let descriptionTiles = data.importedData.map(description => {
    let selected
    if (description.id == props.selectedDescriptionId) {
      selected ='selected'
    }

    return (
      <DescriptionTile
        key={description.id}
        id={description.id}
        name={description.name}
        color={description.hex}
        handleClick={props.handleDescriptionSelection}
        selected={selected}
      />
    )
  })

  return(
    <div className='form-container'>
    <h3>What <strong>adjectives</strong> describe this coffee?</h3>
    <div className='form'>
      {descriptionTiles}
    </div>
    </div>
  )
}

export default DescriptionFormContainer
