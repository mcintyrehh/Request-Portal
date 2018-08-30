var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8008;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var requests = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/api/requests", function (req, res) {
    res.json(requests);
});
app.post("/api/requests", function (req, res) {
    var newRequest = req.body;
    console.log(newRequest);
    requests.push(newRequest);
    res.json(newRequest);
})
//starts listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});