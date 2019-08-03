import React, { Component } from 'react';
import Coffeeburst from './Coffeeburst'
import FlavorTile from './FlavorTile'

class FlavorFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavors: []
    }
    this.handleFlavors = this.handleFlavors.bind(this)
  }

  handleFlavors(payload){
    let deleted
    let newState = this.state.flavors
    this.state.flavors.forEach((flavor, index) => {
      if (Object.keys(flavor).toString() == Object.keys(payload).toString()) {
        deleted = newState.splice(index, 1)
      }
    })
    if (deleted == null) {
      newState = this.state.flavors.concat(payload)
    }
    this.setState({ flavors: newState })
  }

  render() {

    let flavorTiles = this.state.flavors.map(flavor => {

      let flavorName = Object.keys(flavor)
      let flavorColor = Object.values(flavor)

      return(
        <FlavorTile
          key={flavorName}
          name={flavorName}
          color={flavorColor}
        />
      )
    })

    return(
      <div className='flavor-form-container'>
        <Coffeeburst handleFlavors={this.handleFlavors}/>
        <div className='flavor-tile-container'>
          {flavorTiles}
        </div>
      </div>
    )
  }
}

export default FlavorFormContainer;
