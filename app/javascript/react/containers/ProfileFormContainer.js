import React, { Component } from 'react';
import Coffeeburst from '../components/Coffeeburst'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flavors: []
    }
  }

  render() {
    return(
      <Coffeeburst />
    )
  }
}

export default ProfileFormContainer;
