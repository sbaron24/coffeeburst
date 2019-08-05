import React from 'react'
import importedData from './body_data.json'
import BodyTable from './BodyTable'

const data = {importedData}

let bodyTables = data.importedData.children.map(bodyCategory => {
  return <BodyTable bodyCategory={bodyCategory} />
})

const BodyFormContainer = (props) => {

  return(
    <div>
      {bodyTables}
    </div>
  )
}

export default BodyFormContainer
