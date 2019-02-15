import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <h1>Welcome to Moodify</h1>
        <h2> The world-first music playlist generator based on images analytics tecnology!</h2>
        <Link className="explore" to="/options">Explore</Link>
      </div>
    )
  }
}
