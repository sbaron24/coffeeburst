import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CoffeesIndexContainer from './CoffeesIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/coffees' component={CoffeesIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
