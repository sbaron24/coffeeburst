import React, { Component } from 'react';
import FlavorFormContainer from '../components/FlavorFormContainer'
import BodyFormContainer from '../components/BodyFormContainer'
import DescriptionFormContainer from '../components/DescriptionFormContainer'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveMessage: "",
      flavors: [],
      selectedBodyId: "",
      selectedDescriptionId: ""
    }
    this.handleSavePost = this.handleSavePost.bind(this)
    this.handleFlavorSelection = this.handleFlavorSelection.bind(this)
    this.handleBodySelection = this.handleBodySelection.bind(this)
    this.handleDescriptionSelection = this.handleDescriptionSelection.bind(this)
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

  handleBodySelection(event) {
    this.setState({ selectedBodyId: event.target.id })
  }

  handleDescriptionSelection(event) {
    this.setState({ selectedDescriptionId: event.target.id })
  }

  handleSavePost() {
    let flavorIds = this.state.flavors.map(flavor => {
        return flavor.id
      })

    let coffee_id = this.props.match.params.id
    fetch(`/api/v1/coffees/${coffee_id}/profiles`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({
        flavor_ids: flavorIds,
        body_id: this.state.selectedBodyId,
        description_id: this.state.selectedDescriptionId
      }),
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
      <div className='profile-form-container'>
      <h1>Enter a profile</h1>
      <p class='form-info'>Please verify information entered below about the coffee
      by checking the packaging or roaster's website.</p>
        <FlavorFormContainer
          flavors={this.state.flavors}
          handleFlavorSelection={this.handleFlavorSelection}
        />
        <BodyFormContainer
          handleBodySelection={this.handleBodySelection}
          selectedBodyId={this.state.selectedBodyId}
        />
        <DescriptionFormContainer
          handleDescriptionSelection={this.handleDescriptionSelection}
          selectedDescriptionId={this.state.selectedDescriptionId}
        />
        <div class='submit-area'>
          <p>{this.state.saveMessage}</p>
          <button className='button-class' onClick={this.handleSavePost}>Save</button>
        </div>
      </div>

    )
  }
}

export default ProfileFormContainer;
