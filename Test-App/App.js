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



const fs = require("fs")

fs.readdir("./",function(err,docs){

    if(err) console.log("error",err)
    else console.log("result",docs)

})




