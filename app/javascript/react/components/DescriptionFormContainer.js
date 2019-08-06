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
    <div className='description-form-container'>
      {descriptionTiles}
    </div>
  )
}

export default DescriptionFormContainer
