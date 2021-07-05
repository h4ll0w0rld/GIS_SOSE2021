import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace ModulpruefungGis {
    let playingCarts: Mongo.Collection;
    let dataBaseUrl: string = "mongodb+srv://admin:hallodasistmeincluster@cluster0.0enhn.mongodb.net/Test?retryWrites=true&w=majority";

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


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {          //Anfragen werden hier "gefagen"
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");                //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let refUrl: URL = new URL(_request.url, "https://myfirsttestserverisnowlive.herokuapp.com");
        var url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);


        if (refUrl.pathname == "/getData") {
            console.log("GIB MIR DATEN ! :D ");
            _response.write(JSON.stringify(await (playingCarts.find().toArray())));

            _response.end();

        } else if (refUrl.pathname == "/save") {

            writeToDatabase(url);
            _response.write("hey i am here");
            _response.end();

        } else if (refUrl.pathname == "/delete") {
            console.log("hey ich lösche");
            removeImage(url);
        }

    }




    async function connectRoDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        playingCarts = mongoClient.db("Test").collection("PlayingCarts");
        console.log("Database is connected", playingCarts != undefined);

    }



    function writeToDatabase(dataUrl: Url.UrlWithParsedQuery): void {
        //  console.log(dataUrl.query);
        playingCarts.insert(dataUrl.query);


    }
    function removeImage(dataUrl: Url.UrlWithParsedQuery): void {
        console.log("das ist die ID" + dataUrl.query);

       // playingCarts.deleteOne({ _id: new Mongo.ObjectId(dataUrl.query) });

    }

}