const http = require("http");
const queryString = require("query-string");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  const data = queryString.stringify({
    color: "blue",
  });

  const options = {
    host: "localhost",
    port: 4000,
    path: "/",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(data),
    },
  };

  const httpReq = http.request(options, function (httpRes) {
    httpRes.setEncoding("utf8");
    httpRes.on("data", function (chunk) {
      console.log("body: " + chunk);
      res.send(chunk);
    });
  });

  httpReq.write(data);
  httpReq.end();
});

app.listen(port, () => {
  console.log(`Web Server listening at http://localhost:${port}`);
});
