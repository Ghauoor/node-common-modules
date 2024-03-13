const Logger = require("./logger");

// logger.log("Ghayoor");
//* Path Module
// const path = require("path");

// const pathObj = path.parse(__filename);

// console.log(pathObj);

//* os Module

// const os = require("os");
// const freeMem = os.freemem();
// const totalMem = os.totalmem();

// console.log(`Total Memory is ${totalMem} and free Memory is ${freeMem}`);

//* fs Module
// const fs = require("fs");

// const file = fs.readdirSync("./");
// const file = fs.readdir("./", (error, file) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("RESULT", file);
//   }
// });
// console.log(file);

//* Event Module
//? a event is singnal that some thing is happened

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

//? register the listner for the event
// emitter.on("messageLogged", (args) => console.log("Listner is called", args));

// emitter.emit("messageLogged", { id: 1, uri: "https//" }); //? raise an event
//?order is imp because event listner work in sync

// const logger = new Logger();
// logger.on("messageLogged", (args) => console.log("Listener is called", args));
// logger.log("message");

const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/products") {
    res.write(JSON.stringify(["Iphone", "TV", "LED", "TOPI"]));
    res.end();
  }
});
server.on("connection", (socket) => {
  console.log("New Connection");
});

server.listen(3000);
console.log("Listening on Port 3000");
