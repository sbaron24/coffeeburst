import React from 'react'

const BodyTable = (props) => {

  let bodyTiles = props.bodyCategory.children.map(bodyQuality => {
    return (
      <td>{bodyQuality.name}</td>
    )
  })

  return (
    <table>
      <tr>
        <th>{props.bodyCategory.name}</th>
          {bodyTiles}
      </tr>
    </table>
  )
}

export default BodyTable
