namespace ModulpruefungGis {
    let url: string = "https://myfirsttestserverisnowlive.herokuapp.com";

    getData();
    export async function getData(): Promise<void> {
        console.log("i am starting");
        url += "/getData";
        console.log(url);
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();
        console.log(responseText);
        //let responseJson: PlayingCart[] = JSON.parse(responseText);
        // console.log(responseJson != null);

        // return responseJson;

    }




    async function sendData(): Promise<void> {
        fetchServer();

    }

    async function fetchServer(): Promise<void> {


    }







}