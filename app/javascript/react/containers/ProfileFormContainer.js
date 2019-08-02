import React, { Component } from 'react';
import FlavorFormContainer from '../components/FlavorFormContainer'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavors: []
    }
    this.handleFlavors = this.handleFlavors.bind(this)
  }

  handleFlavors(payload){
    debugger
  }

  render() {
    return(
      <FlavorFormContainer/>
    )
  }
}

export default ProfileFormContainer;
