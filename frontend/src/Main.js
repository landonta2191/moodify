import React, { Component } from 'react'
import LandingPage from './LandingPage';
import Intro from "./Intro";
import How from "./How";
import Howafter from './Howafter';
import Footer from './Footer';

export default class Main extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <Intro/>
        <How/>
        <Howafter/>
        <Footer/>
      </div>
    )
  }
}
