//let OpenCamera = require("./opencammera")
const Peer = require('simple-peer');
const $ = require("jquery");
const p = new Peer({
    initiator: location.hash == '#1', 
    trickle: false
});
p.on('signal',(token)=>{

    $("#txtMySignal").val(JSON.stringify(token));
})
$('#btnConnect').click(()=>{
    const signal = JSON.parse($("#txtSignalFriend").val());
    p.signal(signal);
});
p.on("data",(data)=>{
    console.log(data);
});
p.on('connect',()=>{
    p.send("ok");
})
//alert("ok");
//OpenCamera();