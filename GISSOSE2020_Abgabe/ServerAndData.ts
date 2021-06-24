namespace ModulpruefungGis {
    let url: string = "https://myfirsttestserverisnowlive.herokuapp.com";

    getData();
    export async function getData(): Promise<PlayingCart[]> {
        url += "/getData";
        console.log(url);
        let response: Response = await fetch(url, { method: "get" });
        let responseCarts: PlayingCart[] = await response.json();
        console.log(responseCarts != undefined);

        return responseCarts;

    }




    async function sendData(): Promise<void> {
        fetchServer();

    }

    async function fetchServer(): Promise<void> {


    }







}