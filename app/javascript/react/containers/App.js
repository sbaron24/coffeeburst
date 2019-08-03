import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchContainer from './SearchContainer'
import ProfileFormContainer from './ProfileFormContainer'

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchContainer}/>
        <Route exact path='/coffees/:id/profiles/new' component={ProfileFormContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
