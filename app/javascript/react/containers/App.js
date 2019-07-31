import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SearchContainer from './SearchContainer'

export const App = (props) => {

  return (
    <BrowserRouter>
      <Route exact path='/' component={SearchContainer}/>
    </BrowserRouter>
  )
}

export default App
