// #!/user/bin/env node
// "use strict";
// console.log("hello world");

var http = require("http");
var fs = require("fs");
var Stream = require("stream");
var path = require("path");
var { StringDecoder } = require("string_decoder");
http
  .createServer(function(req, res) {
    var path_ = path.resolve("./example.html");
    console.log(path_);
    var decoder = new StringDecoder("utf-8");
    const file = fs.createReadStream(path_);
    //
    const transform = new Stream.Transform({
      objectMode: true,
      transform: (data, _, done) => {
        data = decoder.write(data).toUpperCase();
        done(null, data);
      }
    });
    //
    res.writeHead(200, { "Content-Type": "text/html" });
    file.pipe(transform).pipe(res);
    file.on("end", () => {
      res.end();
    });
  })
  .listen(8080, () => {
    console.log("listening on port 8080");
  });

// //reading file and writing files examples are below
// fs.readFile("./input.txt", (err, data) => {
//   const filename = "./input_modified.txt";
//   process.stdout.write(data);
//   //its important to have the writeFileSYnc be sychronous in this case only because readFile is async
//   fs.writeFileSync(filename, data + "______I added some data here");
// });
