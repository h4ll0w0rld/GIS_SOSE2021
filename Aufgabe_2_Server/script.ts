import * as Http from "http";
import * as Url from "url";

export namespace P_3_1Server {
    console.log("Starting server changes");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8122;

    let server: Http.Server = Http.createServer();          //Neues Element 
    server.addListener("request", handleRequest);           //EventListener für anfragen/"suche" (warten) auf anfrage;
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {             //Funktion für die "Lauschfunktion"
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {          //Anfragen werden hier "gefagen"
        console.log("I hear voices!");


        if (_request) {
            _response.setHeader("content-type", "text/html; charset=utf-8");                //Anfrage wird als HTML Text Element dargestellt
            _response.setHeader("Access-Control-Allow-Origin", "*");

            var url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          
            for (let key in url.query) {
                console.log(key + " : " + url.query[key]);
                _response.write(key + " : " + url.query[key] + "<br/>");

            }
            let responseJson: string = JSON.stringify(url);
            _response.write(responseJson);
           
            _response.end();
        }



        _response.end();
    }
}