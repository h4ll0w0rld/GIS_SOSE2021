"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulpruefungGis = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var ModulpruefungGis;
(function (ModulpruefungGis) {
    let playingCarts;
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
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let refUrl = new URL(_request.url, "https://myfirsttestserverisnowlive.herokuapp.com");
        var url = Url.parse(_request.url, true);
        console.log(url);
        if (refUrl.pathname == "/getData") {
            console.log("GIB MIR DATEN ! :D ");
            _response.write(JSON.stringify(await (playingCarts.find().toArray())));
            _response.end();
        }
        else if (refUrl.pathname == "/save ") {
            writeToDatabase(url);
            _response.write("hey i am here");
            _response.end();
        }
    }
    async function connectRoDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        playingCarts = mongoClient.db("Test").collection("PlayingCarts");
        console.log("Database is connected", playingCarts != undefined);
    }
    function writeToDatabase(dataUrl) {
        //  console.log(dataUrl.query);
        playingCarts.insert(dataUrl.query);
    }
})(ModulpruefungGis = exports.ModulpruefungGis || (exports.ModulpruefungGis = {}));
//# sourceMappingURL=Server.js.map