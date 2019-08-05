import React, { Component } from 'react';
import FlavorFormContainer from '../components/FlavorFormContainer'
import BodyFormContainer from '../components/BodyFormContainer'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveMessage: "",
      flavors: [],
      body: ""
    }
    this.handleSavePost = this.handleSavePost.bind(this)
    this.handleFlavorSelection = this.handleFlavorSelection.bind(this)
  }

  handleFlavorSelection(payload) {
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

  handleSavePost() {
    let flavorIds = this.state.flavors.map(flavor => {
        return flavor.id
      })

    let coffee_id = this.props.match.params.id
    fetch(`/api/v1/coffees/${coffee_id}/profiles`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ flavor_ids: flavorIds }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ saveMessage: body.message })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <FlavorFormContainer
          flavors={this.state.flavors}
          handleFlavorSelection={this.handleFlavorSelection}
        />
        <BodyFormContainer />
        <button className='button-class' onClick={this.handleSavePost}>Save</button>
        {this.state.saveMessage}
      </div>

    )
  }
}

export default ProfileFormContainer;
