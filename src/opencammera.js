let ShowView = require("./ShowVideo")

function OpenCamera(){
    navigator.mediaDevices.getUserMedia({audio: true,video: false}).then((stream)=>{
        ShowView(stream,"streamLocal");
     }).catch(()=>{
         alert("Error");
     });
}
module.exports = OpenCamera;