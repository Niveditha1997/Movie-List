import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
class MyRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='/' component={MyComponent} />
      </BrowserRouter>
    )
  }
}