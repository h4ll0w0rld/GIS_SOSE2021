"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_1Server;
(function (P_3_1Server) {
    // let url: string;
    let orders;
    let dataBaseUrl = "mongodb+srv://admin:hallodasistmeincluster@cluster0.0enhn.mongodb.net/Test?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8122;
    startServer(port);
    connectRoDatabase(dataBaseUrl);
    console.log("Port is: " + port);
    function startServer(_port) {
        console.log("Starting server changes");
        let server = Http.createServer(); //Neues Element 
        server.addListener("request", handleRequest); //EventListener für anfragen/"suche" (warten) auf anfrage;
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let refUrl = new URL(_request.url, "https://myfirsttestserverisnowlive.herokuapp.com");
        var url = Url.parse(_request.url, true);
        console.log(url);
        if (refUrl.pathname == "/send") {
            console.log("alles rein in die Datenbank");
            writeToDatabase(url);
            _response.end();
        }
        else if (refUrl.pathname == "/show") {
            _response.write(findStudents());
            _response.end();
        }
    }
    async function connectRoDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test2").collection("Students");
        console.log("Database is connected", orders != undefined);
    }
    function writeToDatabase(dataUrl) {
        console.log(dataUrl.query);
        orders.insert(dataUrl.query);
    }
    async function findStudents() {
        let allStudents = orders.find();
        let studentJson = JSON.stringify(allStudents.toArray());
        return studentJson;
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map