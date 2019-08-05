import React, { Component } from 'react';
import Coffeeburst from './Coffeeburst'
import FlavorTile from './FlavorTile'

class FlavorFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavors: []
    }
    this.handleFlavorSelection = this.handleFlavorSelection.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  handleFlavorSelection(payload){
    let flavorIds = this.state.flavors.map(flavor => {
      return flavor.id
    })

    let newState = this.state.flavors
    if (flavorIds.includes(payload.id)){
      let deleteAtIndex = flavorIds.indexOf(payload.id)
      newState.splice(deleteAtIndex, 1)
    } else {
      newState.push(payload)
    }
    this.setState({ flavors: newState })
  }

  handleSaveClick() {
    let flavorIds = this.state.flavors.map(flavor => {
      return flavor.id
    })
    let payload = {flavor_ids: flavorIds}
    this.props.handleSavePost(payload)
  }

  render() {

    let flavorTiles = this.state.flavors.map(flavor => {

      return(
        <FlavorTile
          key={flavor.id}
          name={flavor.name}
          color={flavor.hex}
        />
      )
    })

    return(
      <div>
        <div className='flavor-form-container'>
          <button className='button-class' onClick={this.handleSaveClick}>Save</button>
          <Coffeeburst handleFlavorSelection={this.handleFlavorSelection}/>
          <div className='flavor-tile-container'>
            {flavorTiles}
          </div>
        </div>
        <p id='save-message'>{this.props.saveMessage}</p>
      </div>
    )
  }
}

export default FlavorFormContainer;
