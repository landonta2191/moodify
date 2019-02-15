import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PageTransition from 'react-router-page-transition';


export default class Options extends Component {
  render() {
    return (
     
              <div className="video">
                <div className="leftside">
                <Link className="linkvideo" to="/takepicture">
                    <h1 className="left">TAKE PICTURE</h1>
                </Link>
                </div>
                <div className="rightside">
                <Link className="linkupload" to="/upload">
                    <h1 className="right">IMAGE URL</h1>
                </Link>
                </div>
              </div>
      
    )
  }
}
