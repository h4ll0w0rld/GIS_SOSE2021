"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server changes");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8122;
    let server = Http.createServer(); //Neues Element 
    server.addListener("request", handleRequest); //EventListener für anfragen/"suche" (warten) auf anfrage;
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let refUrl = new URL(_request.url, "https://myfirsttestserverisnowlive.herokuapp.com/");
        var url = Url.parse(_request.url, true);
        if (refUrl.pathname == "/html") {
            console.log("jea im fine");
            for (let key in url.query) {
                _response.write("<p>" + key + " : " + url.query[key] + "<p/>");
            }
            _response.end();
        }
        else if (refUrl.pathname == "/json") {
            let responseJson = JSON.stringify(url.query);
            _response.write(responseJson);
            _response.end();
        }
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map