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
        _response.setHeader("content-type", "text/html; charset=utf-8");                //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let refUrl: URL = new URL(_request.url, "https://myfirsttestserverisnowlive.herokuapp.com/");
        var url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);


        if (refUrl.pathname == "/html") {
            console.log("jea im fine");
 
            for (let key in url.query) {
      
                _response.write("<p>" + key + " : " + url.query[key] + "<p/>");
            }
            _response.end();

        } else if (refUrl.pathname == "/json") {
            
            let responseJson: string = JSON.stringify(url.query);
            _response.write(responseJson);
            _response.end();

        }

    }
}