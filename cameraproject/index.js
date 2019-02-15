const constraints = { video: true };

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* use the stream */
  console.log(stream);
  onstream(stream);
  takephoto(stream);
})
.catch(function(err) {
  /* handle the error */
  console.error(error);
});

function onstream(stream) {
    let video= document.getElementById("videotag");
    video.srcObject = stream;
    video.play();
}


function takephoto(stream) {
    const track = stream.getVideoTracks()[0];
    let imageCapture = new ImageCapture(track);
    var promise = imageCapture.takePhoto()
    promise.then((photo) => {
        let image= document.getElementById("photo");
        image.src = URL.createObjectURL(photo);
        console.log(photo);
    })

}