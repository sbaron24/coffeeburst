import React, { Component } from 'react';
import FlavorFormContainer from '../components/FlavorFormContainer'
import BodyFormContainer from '../components/BodyFormContainer'
import DescriptionFormContainer from '../components/DescriptionFormContainer'
import RatingFormContainer from '../components/RatingFormContainer'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveMessage: "",
      flavors: [],
      selectedBodyId: "",
      selectedDescriptionId: "",
      selectedRating: null,
      errors: {}
    }
    this.handleSavePost = this.handleSavePost.bind(this)
    this.handleFlavorSelection = this.handleFlavorSelection.bind(this)
    this.handleBodySelection = this.handleBodySelection.bind(this)
    this.handleDescriptionSelection = this.handleDescriptionSelection.bind(this)
    this.handleRatingSelection = this.handleRatingSelection.bind(this)
    this.validateFlavorsSelected = this.validateFlavorsSelected.bind(this)
    this.validateBodySelected = this.validateBodySelected.bind(this)
    this.validateDescriptionSelected = this.validateDescriptionSelected.bind(this)
    this.validateRatingSelected = this.validateRatingSelected.bind(this)
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

  handleRatingSelection(event) {
    this.setState({ selectedRating: event.target.id })
  }

  handleSavePost() {
    if (
      this.validateFlavorsSelected() &&
      this.validateBodySelected() &&
      this.validateDescriptionSelected() &&
      this.validateRatingSelected()
    ) {
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
          description_id: this.state.selectedDescriptionId,
          rating: this.state.selectedRating
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
  }

  validateFlavorsSelected() {
    if (this.state.flavors.length < 3) {
      let newError = { flavorsSelected: 'You must select at least 3 flavors' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.flavorsSelected
      this.setState({ errors: errorState })
      return true
    }
  }

  validateBodySelected() {
    if (this.state.selectedBodyId == '') {
      let newError = { bodySelected: 'You must select a body' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.bodySelected
      this.setState({ errors: errorState })
      return true
    }
  }

  validateDescriptionSelected() {
    if (this.state.selectedDescriptionId == '') {
      let newError = { descriptionSelected: 'You must select a description' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.descriptionSelected
      this.setState({ errors: errorState })
      return true
    }
  }

  validateRatingSelected() {
    if (this.state.selectedRating == null) {
      let newError = { ratingSelected: 'You must select a rating' }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.ratingSelected
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorItems
    let errorDiv
    if (Object.keys(this.state.errors).length > 0) {
      let errorItems = Object.values(this.state.errors).map(error => {
        return (<li key={error}>{error}</li>)
      })
      errorDiv = <div>{errorItems}</div>
    }

    return(
      <div className='profile-form-container'>
      <h1>Enter a profile</h1>
      <p className='form-info'>Please verify information entered below about the coffee
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
        <RatingFormContainer
          handleRatingSelection={this.handleRatingSelection}
          selectedRating={this.state.selectedRating}
        />
        <div className='submit-area'>
          {errorDiv}
          <p>{this.state.saveMessage}</p>
          <button className='button-class' onClick={this.handleSavePost}>Save</button>
        </div>
      </div>

    )
  }
}

export default ProfileFormContainer;
