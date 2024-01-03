// function Myname(name)
// {
//     console.log("Hello my name is "+ name);
// }

// Myname("Mugisha")

// const log = require("./logger");

// log("message");

// const path = require("path")

// var pathObject = path.parse(__filename);

// console.log(pathObject)

// const os = require("os");

// var TotalMemory = os.totalmem();
// var FreeMemory = os.freemem();

// console.log("Total Memory" + TotalMemory + "\n Free memory" + FreeMemory );

// const fs = require("fs")

// const files = fs.readdirSync("./")

// console.log(files)

// const fs = require("fs")

// fs.readdir("./",function(err,docs){

//     if(err) console.log("error",err)
//     else console.log("result",docs)

// })

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("messageLogged", (arg)=> {
//   console.log("Listener called",arg);
// });
// emitter.emit("messagelogged",{id:1,url:"//https:meightGroupLtd.rw"});


const http = require("http")

const server = http.createServer();

server.on("connection",(socket)=>{
    console.log("new connenction...")
})

server.listen(3000)

console.log("Listening on port 3000")



