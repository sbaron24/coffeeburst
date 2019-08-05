import React, { Component } from 'react';
import FlavorFormContainer from '../components/FlavorFormContainer'

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveMessage: ""
    }
    this.handleSavePost = this.handleSavePost.bind(this)
  }

  handleSavePost(payload) {
    let coffee_id = this.props.match.params.id
    fetch(`/api/v1/coffees/${coffee_id}/profiles`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
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
      <FlavorFormContainer
        handleSavePost={this.handleSavePost}
        saveMessage={this.state.saveMessage}
      />
    )
  }
}

export default ProfileFormContainer;
