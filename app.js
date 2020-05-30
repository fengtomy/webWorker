const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (~req.url.indexOf(".js")) {
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) return handleError(res);
      res.setHeader("Content-Type", "text/javascript");
      res.end(data);
    });
  } else if (req.url === "/") {
    fs.readFile(__dirname + "/index.html", function (err, data) {
      if (err) return handleError(res);
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else {
    handleError(res);
  }
});

server.listen(3000, () => console.log(`server running on port 3000`));

function handleError(res) {
  res.statusCode = 404;
  res.end("An error occurs");
}