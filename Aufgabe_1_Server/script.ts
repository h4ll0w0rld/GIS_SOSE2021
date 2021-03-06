import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_1Server {
    // let url: string;
    let orders: Mongo.Collection;
    let dataBaseUrl: string = "mongodb://localhost:27017";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8122;

    startServer(port);
    connectRoDatabase(dataBaseUrl);
    console.log("Port is: " + port);

    function startServer(_port: number | string): void {
        console.log("Starting server changes");
        let server: Http.Server = Http.createServer();          //Neues Element 
        server.addListener("request", handleRequest);           //EventListener für anfragen/"suche" (warten) auf anfrage;
        server.addListener("listening", handleListen);
        server.listen(port);
    }

    function handleListen(): void {             //Funktion für die "Lauschfunktion"
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {          //Anfragen werden hier "gefagen"
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");                //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let refUrl: URL = new URL(_request.url, "https://myfirsttestserverisnowlive.herokuapp.com/");
        var url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);


        if (refUrl.pathname == "/send") {
            console.log("alles rein in die Datenbank");
            writeToDatabase(url);

            _response.end();

        } else if (refUrl.pathname == "/show") {

            let responseJson: string = JSON.stringify(url.query);


            _response.write(responseJson);
            _response.end();

        }

    }


    async function connectRoDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        orders = mongoClient.db("Test2").collection("Students");
        console.log("Database is connected", orders != undefined);

    }



    function writeToDatabase(dataUrl: Url.UrlWithParsedQuery): void {
        console.log(dataUrl.query);
        orders.insert(dataUrl.query);


    }
}