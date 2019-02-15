import React, { Component } from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
export default class TakePicture extends Component {
    onTakePhoto (dataUri) {
        // Do stuff with the dataUri photo...
        console.log(dataUri);
      }
  render() {
    return (
        <div className="camera">
            <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
            />
        </div>
      
    )
  }
}
