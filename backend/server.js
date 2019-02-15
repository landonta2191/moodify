//Bring express to our file
const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const spotifyApi= require('./spotify');


// parse application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

'use strict';
const request = require('request');
// Replace <Subscription Key> with your valid subscription key.
// Expire in 7 days.
const subscriptionKey = '63d5596dc3794e1a97cf6727de84812e';
// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';


app.post('/upload', (req, res)=> {
    const imageUrl = req.body.imageUrl;
    console.log(imageUrl)
    // Request parameters.
    const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
        'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };
    const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
    };


    request.post(options, (error, response, body) => {
        //request microsoft API
        if (error) {
          console.log('Error: ', error);
          res.status(500).json({ msg: "Microsoft error" })
          return;
        }
        let microsoftResponse = JSON.parse(body);
        console.log('JSON Response\n');
        console.log(microsoftResponse);
        //pass the mood function to microsoft response
        const mood = getMood(microsoftResponse);
        // request to spotify API to get get spotify playlist
        // and pass the the higest value from microsoft data emotions to 
        //find the playlist
        spotifyApi.searchPlaylists(mood)
        .then(function(data) {
            console.log('Found playlists are', data.body);
            const spotifyData = data;

        //combining the data 
            res.json({
                spotify: spotifyData,
                microsoft: microsoftResponse
            });
        }, function(err) {
            console.log('Something went wrong!', err);
            res.json({ error: err })
        });
        // in callback for that request, run the below code
      });
})

///////////////////////
app.get('/underconstruction', (req, res)=> {
    res.status(404).send('OOOPS NOTHING HERE HONEY');
    
})
app.listen(8080,() => {
    console.log("server is running", 8080); 
});

// pass that largest number function to find the mood 
function getMood(msResponse) {

    let moods = msResponse[0].faceAttributes.emotion
    console.log(moods)
    return getPropertyWithLargestValue(moods);
}
//function to get largest number
function getPropertyWithLargestValue(obj) {
    const properties = Object.keys(obj);
    const values = Object.values(obj);
    const max = Math.max(...values);

    return properties.find((key) => {
        return obj[key] === max ;
    })
}