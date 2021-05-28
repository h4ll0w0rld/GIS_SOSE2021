import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();          //Neues Element 
    server.addListener("request", handleRequest);           //EventListener für anfragen/"suche" (warten) auf anfrage;
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {             //Funktion für die "Lauschfunktion"
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {          //Anfragen werden hier "gefagen"
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");                //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        console.log("Jajajajaja");
        _response.end();
    }
}