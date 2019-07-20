import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Coffeeburst from './Coffeeburst'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/coffees' component={Coffeeburst} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
