import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Upload from './Upload';
import LandingPage from "./LandingPage";
import Intro from "./Intro";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import How from './How';
import Player from "./Player";
import Howafter from './Howafter';
import Options from './Options';
import TakePicture from './TakePicture';

class App extends Component {

state = {
  serverobject: {},
  imgsrc: ""
}

// getimgsrc = () => {
//   return this.state.imgsrc;
// }

submitURL = (e) => {
  this.setState({
    imgsrc: e.target.comment.value
  })
  e.preventDefault();
  const body= {
    imageUrl: e.target.comment.value,
  }
  const init = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
    "content-type": "application/json"
  }};
  fetch("/upload", init)
  .then(resp => {
    console.log(resp)
    return resp.json();
  })
  .then(data => {
      // debugger;
      console.log(data);
      this.setState({
      serverobject: data
      })   
  })
  .catch( error => {
  console.log(error)
  })
}
  render() {
    return (
<div className="App">
  <Nav />
  <Router>
    <Switch>
      <Route path={"/upload"} 
      render={ () => { return <Upload 
      submitform={this.submitURL}
      data={this.state.serverobject} /> } }/>

      <Route path="/landingpage" component={LandingPage} />
      <Route path="/intro" component={Intro} />

      <Route path="/player" 
      render={ () => { return <Player
      submitform={this.submitURL}
      imgsrc= {this.state.imgsrc}
      data={this.state.serverobject} /> } }/>

      <Route path="/" exact component={Main} />
      <Route path="/how" component={How} />
      <Route path="/howafter" component={Howafter} />
      <Route path="/options" component={Options} />
      <Route path="/takepicture" component={TakePicture} />
    </Switch>
  </Router>
</div>
    );
  }
}

// export default withRouter (App);
export default App;