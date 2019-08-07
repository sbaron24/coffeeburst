import React, { Component } from 'react'

class ProfileOptions extends Component {
  constructor(props){
    super(props)
    this.state = {
      profileExists: null,
      userSignedIn: null
    }
  }

  componentDidMount(){
    let coffee_id = this.props.match.params.id
    fetch(`/api/v1/coffees/${coffee_id}/profiles`)
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
    .then(result => {
      this.setState({
        profileExists: result.profileExists,
        userSignedIn: result.userSignedIn
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  renderContent(){
    if (this.state.profileExists == null) {
      return ""
    } else if (!this.state.profileExists) {
      return "Add an official profile"
    } 
  }

  render() {

    return(
      <div>
        {this.renderContent()}
      </div>
    )

  }
}


export default ProfileOptions
