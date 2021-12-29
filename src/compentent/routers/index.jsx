import React, { Component, Fragment, lazy, Suspense } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const Home = lazy(() => import('./Home/index'))
const About = lazy(() => import('./About/index'))

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/home">home</Link>
          <p></p>
          <Link to="/about">about</Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    )
  }
}
