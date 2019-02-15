import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Line, LineChart } from 'recharts';


export default class Player extends Component {
    renderIframe(spotifyData) {
        if (spotifyData != null) {
          let randomresult=  getRandomInt(spotifyData.body.playlists.items.length - 1)
            let id = spotifyData.body.playlists.items[randomresult].id;
            let title = spotifyData.body.playlists.items[randomresult].name;
            return <div className="playpage"> 
                <h1>{title}</h1>
                <iframe allow="geolocation" src={`https://open.spotify.com/embed/user/spotify/playlist/${id}`} width="700" height="680" frameborder="1" allowtransparency="true"></iframe> 
            </div>
        }
    }
    rendermicrosoft(microsoftData) {
        if (microsoftData != null) {
          console.log(microsoftData[0].faceAttributes.emotion.anger);
      let data = [
      { name: 'anger', value: microsoftData[0].faceAttributes.emotion.anger },
      { name: 'contempt', value: microsoftData[0].faceAttributes.emotion.contempt},
      { name: 'disgust', value: microsoftData[0].faceAttributes.emotion.disgust },
      { name: 'fear', value: microsoftData[0].faceAttributes.emotion.fear},
      { name: 'hapiness', value: microsoftData[0].faceAttributes.emotion.happiness },
      { name: 'neutral', value: microsoftData[0].faceAttributes.emotion.neutral },
      { name: 'sadness', value: microsoftData[0].faceAttributes.emotion.sadness },
      { name: 'surprise', value: microsoftData[0].faceAttributes.emotion.surprise },
            ]
            console.log(data);

            return <div class="overplay">
            <img className="mainimage" src= {this.props.imgsrc}/>
            <BarChart width={730} height={250} 
            data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={[0, 1]}/>
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#c02e4c" />
            </BarChart>
            <div className="stats"><h1>Age: {microsoftData[0].faceAttributes.age}</h1>
            <h1>{microsoftData[0].faceAttributes.gender}</h1></div>
            
        </div>        
        }
    }
  render() {
    let stats= this.props.data;
    return (
      <div className="player">
        { this.rendermicrosoft(stats.microsoft) }
        { this.renderIframe(stats.spotify) }
      </div>
    )
  }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }