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
        if (_request) {
            _response.setHeader("content-type", "text/html; charset=utf-8"); //Anfrage wird als HTML Text Element dargestellt
            _response.setHeader("Access-Control-Allow-Origin", "*");
            var url = Url.parse(_request.url, true);
            // _response.write(responseJson);
            for (let key in url.query) {
                console.log(key + " : " + url.query[key]);
                _response.write(key + " : " + url.query[key] + "<br/>");
            }
            let responseJson = JSON.stringify(url.query);
            _response.write(responseJson);
            _response.end();
        }
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map