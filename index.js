const express = require("express");
const app = express();
const express_hand = require("express-handlebars");
const socketIo = require("socket.io");
const http = require("http").Server(app);

app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.static("public"))
  
app.get("/",(req,res)=>{
  res.render("home");
})

http.listen(3000, () => {
    console.log("the app is run in port 3000!");
  });