import React, { Component } from 'react'

class CoffeesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coffees: []
    }
  }

  componentDidMount(){
    // fetch('/api/v1/coffees')
  }

  render(){

    return (
      <p>heeeyyy</p>
    )

  }
}

export default CoffeesIndexContainer;
