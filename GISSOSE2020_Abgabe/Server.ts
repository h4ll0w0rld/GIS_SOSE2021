import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace ModulpruefungGis {
    let playingCarts: Mongo.Collection;
    let bestTime: Mongo.Collection;
    let dataBaseUrl: string = "mongodb+srv://admin:hallodasistmeincluster@cluster0.0enhn.mongodb.net/Test?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8122;

    startServer(port);

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
        let dataStringCards: string = "PlayingCarts";
        let dataStringTime: string = "Time";
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");                //Anfrage wird als HTML Text Element dargestellt
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let refUrl: URL = new URL(_request.url, "https://myfirsttestserverisnowlive.herokuapp.com");
        var url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);


        if (refUrl.pathname == "/getData") {

            await connectRoDatabase(dataBaseUrl, dataStringCards);
            console.log("GIB MIR DATEN ! :D ");
            _response.write(JSON.stringify(await (playingCarts.find().toArray())));

            _response.end();

        } else if (refUrl.pathname == "/save") {
            await connectRoDatabase(dataBaseUrl, dataStringTime);       //TODO Change !!


            _response.write("hey i am here");
            playingCarts.insert(url.query);
            _response.end();

        } else if (refUrl.pathname == "/delete") {
            await connectRoDatabase(dataBaseUrl, dataStringCards);
            console.log("hey ich lösche");
            playingCarts.deleteOne({ _id: new Mongo.ObjectId(refUrl.searchParams.get("_id")) });

        } else if (refUrl.pathname == "/saveTime") {
            
            await connectRoDatabase(dataBaseUrl, dataStringTime);
            console.log("connected to DataBase savetime");
            console.log(url.query);
            bestTime.insert(url.query);
            _response.end();

        }

    }




    async function connectRoDatabase(_url: string, database: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        playingCarts = mongoClient.db("Test").collection(database);
        console.log("Database is connected", playingCarts != undefined);
        console.log(database);

    }




}