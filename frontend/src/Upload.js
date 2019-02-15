import React, { Component } from 'react';
import {Link, withRouter} from "react-router-dom";

export default withRouter(class Upload extends Component {
    state = {
        imgsrc: getRandomSrc()
    }

    handleSubmit = (e) => {
        this.props.submitform(e);
        this.props.history.push('/player');
    }
    render() {
    // let stats= this.props.data;
    let backgroundStyle = {
        backgroundImage: `url(${this.state.imgsrc})`
    };

    return (
    <div className="upload" style={backgroundStyle}>
        <h1>Enter Your URL here:</h1>
        <form  onSubmit={this.handleSubmit} className="comments__form" id = "comment-form" action="" >
            <input type="text" name="comment" placeholder="Enter the image address"/>
            <div className="comments__form--button">
               <button className="cancel" type="reset">CANCEL</button>
               <button type="submit">SUBMIT</button>
            </div>
            <img src= {this.props.imgsrc}/>
        </form>
        {/* <img id="photo"/> */}
        {/* { this.renderIframe(stats.spotify) } */}
    </div>
    )
  }
})

function getRandomSrc() {
    // fill srcs array with urls
    const srcs = [
        "http://anchor.themeshop.co/wp-content/uploads/2018/11/hero3.jpg",
        "http://anchor.themeshop.co/wp-content/uploads/2018/11/hero2.jpg",
        "https://i.gifer.com/UqFt.gif",
        "https://media.giphy.com/media/BHNfhgU63qrks/source.gif",
        "https://media.giphy.com/media/3ov9jJuT2pEVMRMas0/giphy.gif",
        "https://i.pinimg.com/originals/25/97/25/25972557410a5e52c19afdbc02666757.gif",
        "https://i.redd.it/brd8yuu3zis01.gif",
        "https://i.imgur.com/rcr1Q5M.gif",
        "https://i.gifer.com/23UV.gif",
        "https://data.whicdn.com/images/293423134/original.gif",
        "https://tse2.mm.bing.net/th?id=OGC.65207e416d092b13f2f079cdae2e58a5&pid=1.7&rurl=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Flfxm47k9RPM0E%2Fsource.gif&ehk=kQOHJKJjjAHb3mRaomScIQ",
        "https://38.media.tumblr.com/834d72ef32d84b400266a4aa6661ff31/tumblr_n26039VliX1r3nnfeo1_500.gif",
    ];
    let index = Math.floor(Math.random() * Math.floor(srcs.length))
    return srcs[index];
  }
