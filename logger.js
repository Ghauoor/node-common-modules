// (function (exports, require, module, __filename, __dirname) {
//   let url = "http://mylogger.io/log";

//   function log(message) {
//     console.log("Log is " + message);
//   }

//   module.exports.log = log;
// });
// module.exports = log; // export single function
// module wrapper func
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log("Log is " + message);
    this.emit("messageLogged", { id: 1, url: "http://mylogger.io/log" });
  }
}

// let url = "http://mylogger.io/log";
// console.log("Filename" + __filename);
// console.log("Dir Name" + __dirname);

module.exports = Logger;
